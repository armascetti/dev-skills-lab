import { Router } from 'express'
import * as skillsDb from '../data/skills-db.js'
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()


/* GET users listing. */
router.get('/', skillsCtrl.index)




export {
  router
}
