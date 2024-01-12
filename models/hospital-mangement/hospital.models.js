import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema(
  {
    namem: {
      type: String,
      required: true
    },
    address1: {
      type: String,
      required: true
    },
    address2: {
      type: String,
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    pincode: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export const Hospital = mongoose.model('Hospital', hospitalSchema)