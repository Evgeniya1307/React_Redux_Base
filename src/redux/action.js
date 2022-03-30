import { INCREMENT, DECREMENT, INPUT_TEXT } from "./types";


export  function incrementLikes() {
    return {
        type:INCREMENT
    }
}

export  function decrementlikes() {
    return {
        type:DECREMENT
    }
}

export  function inputText(text) {
    return {
        type:INPUT_TEXT,
     text
    }
}