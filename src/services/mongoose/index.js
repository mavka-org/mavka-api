import Promise from 'bluebird'
import mongoose from 'mongoose'
import { mongo } from '../../config'

Object.keys(mongo.options || { }).forEach((key) => {
  mongoose.set(key, mongo.options[key])
})

mongoose.Promise = Promise
/* istanbul ignore next */
mongoose.Types.ObjectId.prototype.view = function () {
  return { id: this.toString() }
}

/* istanbul ignore next */
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error: ' + err)
  process.exit(-1)
})

/**
 * ObjectId handler middleware for Express.
 * @memberof Mongoose
 * @return {Function} The middleware.
 * @warning Affects all 24-hex-string-type data in request body
 */
export function MongooseObjectIdHandler () {
  return function (req, res, next) {
    Hex24StringToObjectId(req.body)
    // if ('ById' in req.body) {
    //   const ById = req.body.ById
    //   if (typeof ById === 'object') {
    //     Object.keys(ById).forEach(key => {
    //       req.body[key] = mongoose.Types.ObjectId(ById[key])
    //     })
    //   } else {
    //     req.body._id = mongoose.Types.ObjectId(ById)
    //   }

    //   delete req.body.ById
    // }
    next()
  }
}

/* Converts all24-hex-string-type values within an object into mongoose' Object Id */
const Hex24StringToObjectId = (obj) => {
  for (var key in obj) {
    var val = obj[key]
    if (val === null) continue
    if (typeof val === 'string' && mongoose.Types.ObjectId.isValid(val)) obj[key] = mongoose.Types.ObjectId(val)
    if (typeof val === 'object') Hex24StringToObjectId(val) // recurse
  }
}

export default mongoose
