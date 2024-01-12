import mongoose from 'mongoose'

const subTodoSchema = new mongoose.Schema({}, {timeseries: true})

export const SubTodo = mongoose.model("SubTodo", subTodoSchema)