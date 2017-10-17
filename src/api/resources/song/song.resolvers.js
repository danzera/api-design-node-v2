import { Song } from './song.model'

const getSong = (_, {id}, {user}) => {
  return Song.findById(id).exec()
}

const allSongs = () => {
  return Song.find({}).exec()
}

const newSong = (_, {input}) => {
	return Song.create(input)
}

const updateSong = (_, {input}) => {
	const {id, ...update} = input
	// {new: true} <-- returns the new document, after it's updated
	// gives original document by default
	return Song.findByIdAndUpdate(id, update, {new: true}).exec()
}

export const songResolvers = {
  Query: {
    allSongs,
    Song: getSong
	},
	Mutation: {
		newSong,
		updateSong
  }
}
