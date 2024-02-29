import { CANCELLED } from "dns";
import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: [true, "Please provide a valid number"],
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    OrderItem: {
      type: [OrderItemSchema],
    },
    address: {
      type: string,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);
export const Order = mongoose.model("Order", orderSchema);
