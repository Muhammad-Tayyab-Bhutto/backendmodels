import mongoose from 'mongoose';

const orderItemsSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.OrderId,
      ref: 'Product'
    },
    quantity: {
      type: Number,
      required: true
    }
  }
)

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true
    },
    customer: {
      type: mongoose.Schema.Types.OrderId,
      ref: 'User'
    },
    orederItem: {
      type: []
    },
    address:{ 
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ["PENDING", "DELIVERED", "CANCELED"],
      default: "PENDING"
    }
  }, 
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
