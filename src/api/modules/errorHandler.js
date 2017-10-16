export const apiErrorHandler = (error, req, res, next) => {
	console.log('apiError', error)
	res.status(500)
}
