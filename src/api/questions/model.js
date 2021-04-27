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

const model = mongoose.model('Question', new Schema())

export const basicQuestionAggregator = [
  {
    $limit: 100
  },

  {
    $sort: { order_n: 1 }
  },

  {
    $lookup:
     {
       from: 'subjects',
       localField: 'subject',
       foreignField: '_id',
       as: 'subject'
     }
  },
  {
    $unwind: '$subject'
  },

  {
    $lookup:
     {
       from: 'tests',
       localField: 'test',
       foreignField: '_id',
       as: 'test'
     }
  },
  {
    $unwind: '$test'
  },

  {
    $lookup:
     {
       from: 'question_types',
       localField: 'question_type',
       foreignField: '_id',
       as: 'question_type'
     }
  },
  {
    $unwind: '$question_type'
  },

  {
    $lookup:
     {
       from: 'components_task_task_options',
       localField: 'options.ref',
       foreignField: '_id',
       as: 'options'
     }
  },

  {
    $lookup:
     {
       from: 'components_task_task_texts',
       localField: 'tasks.ref',
       foreignField: '_id',
       as: 'tasks'
     }
  },

  {
    $lookup:
     {
       from: 'explanations',
       localField: 'active_explanation',
       foreignField: '_id',
       as: 'active_explanation'
     }
  },
  {
    $unwind: '$active_explanation'
  },

  {
    $lookup:
     {
       from: 'components_specific_explanations_option_explanations',
       localField: 'active_explanation.option_explanations.ref',
       foreignField: '_id',
       as: 'active_explanation.option_explanations'
     }
  },

  {
    $lookup:
     {
       from: 'components_specific_explanations_task_explanations',
       localField: 'active_explanation.task_explanations.ref',
       foreignField: '_id',
       as: 'active_explanation.task_explanations'
     }
  },

  {
    $project:
     {
       _id: 1,
       order_n: 1,
       correct_answer: 1,
       primary_question: 1,
       options: '$options.text',
       tasks: '$tasks.text',
       topic: '$zno_osvita_topic_name',
       active_explanation: {
         $cond: [
           { $eq: ['$active_explanation.status', 'finished'] },
           {
             comment: '$active_explanation.comment',
             option_explanations: '$active_explanation.option_explanations.text',
             task_explanations: '$active_explanation.task_explanations.text'
           },
           {}
         ]
       },
       question_type: '$question_type.slug',
       subject: '$subject.name',
       test: {
         order_n: 1,
         session: 1,
         year: 1,
         available: 1
       }
     }
  }
]

export const schema = model.schema
export default model
