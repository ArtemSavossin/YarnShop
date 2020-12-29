import express from "express"
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  getUserOrders,
  getOrders,
  updateOrderToPaid,
  updateOrderToDelivered,
  deleteOrder,
} from "../controllers/orderController.js"
import { protect, admin } from "../middleware/authMiddleware.js"

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders)
router.route("/myorders").get(protect, getUserOrders)
router
  .route("/:id")
  .get(protect, getOrderById)
  .delete(protect, admin, deleteOrder)
router.route("/:id/pay").put(protect, updateOrderToPaid)
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered)

export default router
