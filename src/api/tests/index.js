import { Router } from 'express'
import { getTests } from './controller'

const router = new Router()

/**
 * @api {post} /tests/get Get Tests
 * @apiName GetTests
 * @apiGroup Tests
 * @apiParam {String} [subject]          Subject's id.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "subject": "5ffaeae5415c8719e08414d4"
 *     }
 * @apiSuccess {Object[]} tests          List of tests for a requested subject.
 * @apiSuccess {String}   tests._id      Test's id.
 * @apiSuccess {Number}   tests.order_n  Test's order number within a subject.
 * @apiSuccess {String}   tests.session  Test's session name.
 * @apiSuccess {Number}   tests.year     Test's year.
 * @apiSuccess {Boolean}  tests.available     If true, the test is ready to be displayed.
 * ToDo apiError
 */
router.post('/get', getTests)

export default router
