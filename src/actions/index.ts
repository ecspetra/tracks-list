export const addTrack = (track: { id: string, album: { name: string, images: [{ [key: string]: any }] }, name: string, artists: [], preview_url: string }): {
	type: 'ADD_TRACK',
	payload: {
		track: {
			id: string,
			album: {
				name: string,
				images: [{ [key: string]: any }],
			},
			name: string,
			artists: [],
			preview_url: string,
		}
	};
} => ({
	type: "ADD_TRACK",
	payload: {
		track: {
			id: track.id,
			album: track.album,
			name: track.name,
			artists: track.artists,
			preview_url: track.preview_url,
		}
	}
});

export const setCurrentTrack = (idx: number, track: { id: string, album: { name: string, images: [{ [key: string]: any }] }, name: string, artists: [], preview_url: string }): {
	type: 'SET_CURRENT_TRACK',
	payload: {
		idx: number,
		track: {
			id: string,
			album: {
				name: string,
				images: [{ [key: string]: any }],
			},
			name: string,
			artists: [],
			preview_url: string,
		}
	};
} => ({
	type: "SET_CURRENT_TRACK",
	payload: {
		idx: idx,
		track: {
			id: track.id,
			album: track.album,
			name: track.name,
			artists: track.artists,
			preview_url: track.preview_url,
		}
	}
});

export const clearTracks = (): { type: 'CLEAR_TRACKS' } => ({
	type: "CLEAR_TRACKS"
});

export const clearCurrentTrack = (): { type: 'CLEAR_CURRENT_TRACK' } => ({
	type: "CLEAR_CURRENT_TRACK"
});

export type Action =
	| ReturnType<typeof addTrack>
	| ReturnType<typeof setCurrentTrack>
	| ReturnType<typeof clearCurrentTrack>
	| ReturnType<typeof clearTracks>;