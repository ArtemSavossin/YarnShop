import asyncHandler from "express-async-handler"
import Order from "../models/orderModel.js"
import nodemailer from "nodemailer"
import { Email, Item, Span, A, renderEmail, Box } from "react-html-email"

let transporter = nodemailer.createTransport({
  pool: true,
  host: process.env.HOST_MAIL,
  port: process.env.PORT_MAIL,
  secure: false,
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS,
  },
})

transporter.verify(function (error, success) {
  if (error) {
    console.log(error)
  } else {
    console.log("Server is ready to take our messages")
  }
})

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error("No order items")
    return
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    const createdOrder = await order.save()
    try {
      let message = {
        // Subject of the message
        subject: "Nodemailer is unicode friendly ✔" + Date.now(),

        // plaintext body
        text: "Hello to myself!",
        html: renderEmail(
          <Email title={`Заказ ${createdOrder._id}`}>
            <Span>Привет! Спасибо, что отсавил заказ на missyarn.kz.</Span>
            <Span>Твой заказ:</Span>
            <Box>
              {createdOrder.orderItems.map((item) => (
                <Item>
                  <Item>{item.name}</Item>
                  <Item>{item.price * item.qty}</Item>
                  <Item>good</Item>
                </Item>
              ))}
              <Item>
                <strong>Итого: </strong>
                {createdOrder.itemsPrice}
              </Item>
            </Box>
            <Span>
              Чтобы получить свой заказ тебе необходимо оплатить его с помощью
              перевода kaspi по номеру +7(777)777-77-77 или на qiwi кошелек
            </Span>
          </Email>
        ),
        to: req.user.email,
      }
      transporter.sendMail(message)
    } catch (e) {
      console.log("Error in sending message", e.message)
    }
    res.status(201).json(createdOrder)
  }
})

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error("Order not found")
  }
})

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error("Order not found")
  }
})

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isFinished = true
    order.deliveredAt = Date.now()

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error("Order not found")
  }
})

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getUserOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort("-createdAt")
  res.json(orders)
})

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({})
    .populate("user", "id name")
    .sort("-createdAt")
  res.json(orders)
})

const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    await order.remove()
    res.json({ message: "order removed" })
  } else {
    res.status(404)
    throw new Error("order not found")
  }
})

export {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getUserOrders,
  getOrders,
  deleteOrder,
}
