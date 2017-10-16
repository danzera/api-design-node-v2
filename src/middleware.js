import bodyParser from 'body-parser'

const setGlobalMiddleware = (app) => {
	app.use(bodyParser.urlencoded({extended: true}))
	app.use(bodyParser.json()) // needed for req.body
}

export default setGlobalMiddleware
