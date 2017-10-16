import express from 'express'
import playlistController from './playlist.controller'

export const playlistRouter = express.Router()

playlistRouter.param('id', playlistController.findByParam)

playlistRouter.route('/')
  .get(playlistController.getAll) // SINCE NO ID IS SPECIFIED IN THE ROUTE --> INDICATES YOU WANT TO GET ALL
  .post(playlistController.createOne)

playlistRouter.route('/:id')
  .get(playlistController.getOne) // SINCE AN IDE IS SPECIFIED IN THIS ROUTE --> INDICATES YOU WANT TO GET ONE
  .put(playlistController.updateOne)
  .delete(playlistController.deleteOne)