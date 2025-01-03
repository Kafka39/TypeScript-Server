import dotenv from 'dotenv';
dotenv.config()
import express from "express";

const app = express();
app.use(express.json());

import router from './routers/user-router'

app.use('/api', router)

const startServer = () => {
	try {
		// Connect to DB
		app.listen(process.env.SERVER_PORT, (): void => {
			console.log(`Server started at http://localhost:${process.env.SERVER_PORT}`);
		});
	} catch(err) {
		console.log(err)
	}
}
startServer()