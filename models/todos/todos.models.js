import exp from 'constants'
import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: true,
      default: false
    },
    // relationship
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    subTodos: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubTodo"
    }]
  }, 
  {
    timestamps: true
  }
)

export const Todo = mongoose.model("Todo", todoSchema)