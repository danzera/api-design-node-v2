import { Song } from './song.model'

// _ variable in the params is a placeholder -- will never be used
const getSong = (_, {id}) => {
	const song = await Song.findById(id).exec()

	if (!song) {
		throw new Error('Cannot find song with id', id)
	}

	return song
}

const allSongs = () => {
	return Song.find({}).exec()
}

export const songResolvers = {
	Query: {
		allSongs,
		Song: getSong
	}
}