import express from 'express'
import userService from '../service/user-service'

class UserController {
	async register(req: express.Request, res: express.Response, next: express.NextFunction) {
		const { name } = req.body
		const log = await userService.registration(name)
		res.status(200).json(log)
	}
}

export default new UserController()