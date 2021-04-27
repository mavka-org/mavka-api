import { internalError, success } from '../../services/response/'
import Question, { basicQuestionAggregator } from './model'

export const getQuestions = (req, res) => {
  Question.aggregate([
    { $match: req.body }
  ].concat(basicQuestionAggregator))
    .then(internalError(res))
    .then(success(res))
}

export const getRandomQuestions = (req, res) => {
  Question.aggregate([
    { $match: req.body },
    { $sample: { size: req.query.sampleSize || 10 } }
  ].concat(basicQuestionAggregator))
    .then(internalError(res))
    .then(success(res))
}
