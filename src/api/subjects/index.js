import { Router } from 'express'
import { getSubjects } from './controller'

const router = new Router()

/**
 * @api {post} /subjects/get Get Subjects
 * @apiName GetSubjects
 * @apiGroup Subjects
 * @apiSuccess {Object[]} subjects       List of subjects.
 * @apiSuccess {String}   subjects._id   Subject's id.
 * @apiSuccess {String}   subjects.slug  Subject's slug.
 * @apiSuccess {String}   subjects.name  Subject's full name.
 */
router.post('/get', getSubjects)

export default router
