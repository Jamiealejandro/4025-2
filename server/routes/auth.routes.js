import express from 'express'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/auth/Signin')
 .post(authCtrl.signin)

router.route('/auth/signout')
 .get(authCtrl.signout)

export default router
