import { Router } from 'express'
import { score } from './controller'

const router = new Router()

/**
 * TODO
 */
router.get('/', score)

export default router
