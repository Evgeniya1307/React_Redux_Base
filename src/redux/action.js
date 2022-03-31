import { INCREMENT, DECREMENT, INPUT_TEXT, COMMENT_CREATE,  COMMENT_UPDATE, COMMENT_DELETE, COMMENTS_LOAD } from "./types";


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

export  function commentCreate(text,id) {
    return {
        type:COMMENT_CREATE,
     data:{text,id}
    }
}

export  function commentUpdate(text,id) {
    return {
        type:COMMENT_UPDATE,
     data:{text,id}
    }
}

export  function commentDelete(id) {
    return {
        type: COMMENT_DELETE,
    id
    }
}

export  function сommentsLoad() {
    return async dispatch => {
        const response =fetch("https://jsonplaceholder.typicode.com/comments?_limit=10");    
    const jsonData=await (await response).json();
    dispatch({
        type:COMMENTS_LOAD,
        data:jsonData
    })
    }
}