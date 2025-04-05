// Methods that modify the original array (Mutability)

// shift()

const colors = ['Yellow', 'Blue', 'Red']
const revomeColors = colors.shift()

console.log(colors)
console.log(revomeColors)

// unshift()

const newColors = colors.unshift('Pink', 'Purple')
console.log(colors)
console.log(newColors)


// Exercise: Managing a Playlist
function managePlaylist (playlist, newSong) {
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

const initialPlaylist = ['WOAHH', 'Friends', 'ME GUSTAS CC']
const newSongToAdd = 'THUNDER Y LIGHTNING'

const updatePlaylist = managePlaylist(initialPlaylist, newSongToAdd)

console.log('Initial Playlist: ', initialPlaylist)
console.log('New song to add: ', newSongToAdd)
console.log('Update Playlist: ', updatePlaylist)