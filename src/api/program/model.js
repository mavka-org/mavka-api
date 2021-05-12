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

const model = mongoose.model('Module', new Schema())

export const basicProgramAggregator = [
  {
    $limit: 5
  },

  {
    $sort: { order_n: 1 }
  },

  {
    $lookup:
     {
       from: 'chapters',
       let: { module_id: '$_id' },
       pipeline: [
         { $match: { $expr: { $eq: ['$module', '$$module_id'] } } },

         {
           $lookup: {
             from: 'topics',
             foreignField: 'chapter',
             localField: '_id',
             as: 'topics'
           }
         },

         {
           $project: {
             _id: 0,
             name: 1,
             order_n: 1,
             topics: {
               _id: 1,
               name: 1,
               order_n: 1
             }
           }
         }
       ],
       as: 'chapters'
     }
  },

  {
    $project: {
      _id: 0,
      name: 1,
      order_n: 1,
      chapters: 1
    }
  }
]

export const schema = model.schema
export default model
