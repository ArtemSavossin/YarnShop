import mongoose from "mongoose"

const OrderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: String, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      county: { type: String, required: false, default: "Kazakhstan" },
    },
    payMethod: {
      type: String,
      required: false,
    },
    payResult: {
      id: { type: String },
      status: { type: String },
      updTime: { type: String },
      emailAddress: { type: String },
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    isFinished: {
      type: Boolean,
      required: true,
      default: false,
    },
    itemsPrice: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model("Order", OrderSchema)

export default Order
