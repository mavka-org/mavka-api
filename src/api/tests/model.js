import mongoose, { Schema } from 'mongoose'
// import mongooseKeywords from 'mongoose-keywords'

// const questionSchema = new Schema({
//   id: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   username: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   toUnfollow: [String],
//   dueDate: Number
// })

// questionSchema.methods = {
//   view (full) {
//     const view = {}
//     let fields = ['id', 'username', 'status', 'dueDate', 'createdAt']

//     if (full) {
//       fields = [...fields, 'toUnfollow', 'password']
//     }

//     fields.forEach((field) => { view[field] = this[field] })

//     return view
//   }
// }

// questionSchema.plugin(mongooseKeywords, { paths: ['username'] })

const model = mongoose.model('Test', new Schema())

export const basicTestAggregator = [
  {
    $limit: 100
  },

  {
    $sort: { order_n: -1 }
  },

  {
    $project:
     {
       _id: 1,
       order_n: 1,
       year: 1,
       session: 1,
       available: 1
     }
  }
]

export const schema = model.schema
export default model
