import { internalError, success } from '../../services/response/'
import Subject, { basicSubjectAggregator } from './model'

export const getSubjects = (req, res) => {
  Subject.aggregate([
    { $match: req.body }
  ].concat(basicSubjectAggregator))
    .then(internalError(res))
    .then(success(res))
}
