import { Playlist } from './playlist.model'

// _ variable in the params is a placeholder -- will never be used
const getPlaylist = (_, {id}) => {

	// see solution branch

}

const allPlaylists = () => {
	
	// see solution branch
	
}

export const songResolvers = {
	Query: {
		allPlaylists,
		Playlist: getPlaylist
	}
}