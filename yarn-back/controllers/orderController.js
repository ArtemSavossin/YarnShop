import asyncHandler from "express-async-handler"
import Order from "../models/orderModel.js"

const addOrderItems = asyncHandler(async (req, res) => {
  console.log(req.body)
  const { orderItems, shippingAddress, itemsPrice } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error("Нет вещей в корзине.")
  } else {
    const order = new Order({
      orderItems,
      shippingAddress,
      itemsPrice,
      user: req.user._id,
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
})

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error("Заказ не найден")
  }
})

const getUserOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
  res.json(orders)
})

export { addOrderItems, getOrderById, getUserOrders }
