import mongoose from 'mongoose'

export const schema = {
	
	title: {
		type: String,
		required: [true, 'Song needs a title!']
	},
	
	url: {
		type: String,
		unique: true,
		required: [true, 'Song needs a unique URL!']
	},
	
	album: {
		type: String,
		required: [true, 'Song needs an album!']
	},
	
	artist: {
		type: String,
		required: [true, 'Song needs an artist!']
	},
	
	rating: {
		type: Number,
		required: [true, 'Song needs a rating!']
	},

	favorite: {
		type: Boolean,
		required: [true, 'Song needs a type!']
	}
}

const songSchema = new mongoose.Schema(schema)

export const Song = mongoose.model('song', songSchema)
