import { Router } from 'express'
import { getQuestions, getRandomQuestions } from './controller'

const router = new Router()

/**
 * TODO
 * @api {post} /getQuestions Get Questions
 * @apiName Get Questions
 * @apiGroup Questions
 * @apiPermission user
 * @apiHeader {String} Authorization Basic authorization with email and password.
 * @apiParam {String} access_token Master access_token.
 * @apiSuccess (Success 201) {String} token User `access_token` to be passed to other requests.
 * @apiSuccess (Success 201) {Object} user Current user's data.
 * @apiError 401 Master access only or invalid credentials.
 */
router.post('/', getQuestions)

/**
 * TODO
 * @api {get} /auth Authenticate
 * @apiName Authenticate
 * @apiGroup Auth
 * @apiPermission master
 * @apiHeader {String} Authorization Basic authorization with email and password.
 * @apiParam {String} access_token Master access_token.
 * @apiSuccess (Success 201) {String} token User `access_token` to be passed to other requests.
 * @apiSuccess (Success 201) {Object} user Current user's data.
 * @apiError 401 Master access only or invalid credentials.
 */
router.post('/random', getRandomQuestions)

export default router
