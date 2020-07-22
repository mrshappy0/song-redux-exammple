// Action Creator
export const selectSong = song =>{
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

//create named export so you export mutliple functions from single file