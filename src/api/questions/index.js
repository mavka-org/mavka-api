import { Router } from 'express'
import { getQuestions, getRandomQuestions } from './controller'

const router = new Router()

/**
 * @api {post} /questions/get Get Questions
 * @apiName GetQuestions
 * @apiGroup Questions
 * @apiParam {String} [test]             Test's id.
 * @apiParam {String} [topic]            Topic's id.
 * @apiParam {Number} [sample]           Number of random questions's id. Required if requesting topics. TODO
 * @apiParamExample {json} Test-Example:
 *     {
 *       "test": "608177ee6717352a740bde79"
 *     }
 * @apiParamExample {json} Topic-Example:
 *     {
 *       "topic": "609c004c600a9c36a86ed3c8"
 *       "samle": 10
 *     }
 * @apiSuccess {Object[]} questions          List of questions for a requested test or topic.
 * @apiSuccess {String}   questions._id      Question's id.
 * @apiSuccess {Number}   questions.order_n  Question's order number within a test / topic.
 * @apiSuccess {String}   questions.subject  Question's subject's id.
 * @apiSuccess {String}   questions.question_type  Question's type name.
 * @apiSuccess {String}   questions.primary_question  Question's primary question in html format.
 * @apiSuccess {String[]} questions.tasks    List of question's tasks in html format.
 * @apiSuccess {String[]} questions.options  List of question's options in html format.
 * @apiSuccess {Object}   questions.active_explanation          Question's active explanation.
 * @apiSuccess {String}   questions.active_explanation.comment  Question's overall comment.
 * @apiSuccess {String[]} questions.active_explanation.option_explanations  List of question's explanations for options.
 * @apiSuccess {String[]} questions.active_explanation.task_explanations    List of question's explanations for tasks.
 * @apiSuccess {Object}   questions.test          The test question belongs to.
 * @apiSuccess {String}   questions.test._id      Question's test's id.
 * @apiSuccess {Number}   questions.test.order_n  Question's test's order number within a subject.
 * @apiSuccess {String}   questions.test.session  Question's test's session name.
 * @apiSuccess {Number}   questions.test.year     Question's test's year.
 * @apiSuccess {Object[]} questions.topic         The topic question belongs to.
 * @apiSuccess {String}   questions.topic._id     Question's topic's id.
 * @apiSuccess {String}   questions.topic.name    Question's topic's name.
 * @apiSuccess {Number}   questions.topic.order_n Question's topic's order number within a chapter.
 * ToDo apiError
 */
router.post('/get', getQuestions)

/**
 * @api {post} /questions/get Get Random Questions
 * @apiName GetRandomQuestions
 * @apiGroup Questions
 * @apiParam {String} [subject]          Subject's id.
 * @apiParam {Number} [sample=10]        Number of random questions to sample.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "subject": "5ffaeae5415c8719e08414d4"
 *     }
 * @apiParamExample {json} CustomSample-Example:
 *     {
 *       "subject": "5ffaeae5415c8719e08414d4",
 *       "sample": 20
 *     }
 * @apiSuccess {Object[]} questions          List of questions for a requested test or topic.
 * @apiSuccess {String}   questions._id      Question's id.
 * @apiSuccess {Number}   questions.order_n  Question's order number within a test / topic.
 * @apiSuccess {String}   questions.subject  Question's subject's id.
 * @apiSuccess {String}   questions.question_type  Question's type name.
 * @apiSuccess {String}   questions.primary_question  Question's primary question in html format.
 * @apiSuccess {String[]} questions.tasks    List of question's tasks in html format.
 * @apiSuccess {String[]} questions.options  List of question's options in html format.
 * @apiSuccess {Object}   questions.active_explanation          Question's active explanation.
 * @apiSuccess {String}   questions.active_explanation.comment  Question's overall comment.
 * @apiSuccess {String[]} questions.active_explanation.option_explanations  List of question's explanations for options.
 * @apiSuccess {String[]} questions.active_explanation.task_explanations    List of question's explanations for tasks.
 * @apiSuccess {Object}   questions.test          The test question belongs to.
 * @apiSuccess {String}   questions.test._id      Question's test's id.
 * @apiSuccess {Number}   questions.test.order_n  Question's test's order number within a subject.
 * @apiSuccess {String}   questions.test.session  Question's test's session name.
 * @apiSuccess {Number}   questions.test.year     Question's test's year.
 * @apiSuccess {Object[]} questions.topic         The topic question belongs to.
 * @apiSuccess {String}   questions.topic._id     Question's topic's id.
 * @apiSuccess {String}   questions.topic.name    Question's topic's name.
 * @apiSuccess {Number}   questions.topic.order_n Question's topic's order number within a chapter.
 * ToDo apiError
 */
router.post('/getRandom', getRandomQuestions)

export default router
