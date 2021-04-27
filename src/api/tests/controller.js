import { internalError, success } from '../../services/response/'
import Test, { basicTestAggregator } from './model'

export const getTests = (req, res) => {
  Test.aggregate([
    { $match: req.body }
  ].concat(basicTestAggregator))
    .then(internalError(res))
    .then(success(res))
}
