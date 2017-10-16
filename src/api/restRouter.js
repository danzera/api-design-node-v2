import express from 'express'
import { userRouter } from './resources/user'
import { songRouter } from './resources/song'
import { playlistRouter } from './resources/playlist'

export const restRouter = express.Router()

restRouter.use('/user', userRouter)
restRouter.use('/song', songRouter) // MOUNT SONG ROUTER
restRouter.use('/playlist', playlistRouter) // MOUNT PLAYLIST ROUTER
