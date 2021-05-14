import { Router } from 'express'
import { getProgram } from './controller'

const router = new Router()

/**
 * @api {post} /program/get Get Program
 * @apiName GetProgram
 * @apiGroup Program
 * @apiParam {String} [subject]          Subject's id.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "subject": "5ffaeae5415c8719e08414d4"
 *     }
 * @apiSuccess {Object[]} modules          List of modules for a requested subject.
 * @apiSuccess {String}   modules.name     Module's name.
 * @apiSuccess {Number}   modules.order_n  Module's order number within a subject.
 * @apiSuccess {Object[]} modules.chapters          List of chapters within a module.
 * @apiSuccess {String}   modules.chapters.name     Chapter's name.
 * @apiSuccess {Number}   modules.chapters.order_n  Chapter's order number within a module.
 * @apiSuccess {Object[]} modules.chapters.topics          List of topics within a chapter.
 * @apiSuccess {String}   modules.chapters.topics._id      Topic's id.
 * @apiSuccess {String}   modules.chapters.topics.name     Topic's name.
 * @apiSuccess {Number}   modules.chapters.topics.order_n  Topic's order number within a chapter.
 * ToDo apiError
 */
router.post('/get', getProgram)

export default router
