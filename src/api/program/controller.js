import { internalError, success } from '../../services/response'
import Program, { basicProgramAggregator } from './model'

export const getProgram = (req, res) => {
  Program.aggregate([
    { $match: req.body }
  ].concat(basicProgramAggregator))
    .then(internalError(res))
    .then(success(res))
}
