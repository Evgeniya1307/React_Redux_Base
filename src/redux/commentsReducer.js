import { 
     COMMENT_CREATE, 
     COMMENT_DELETE, 
     COMMENT_UPDATE,COMMENTS_LOAD }
      from "./types";

const initialState={
    comments: []
}

export const commentsReducer=(state=initialState,action)=>{
console.log("comments reducer >>>", action)

 switch(action.type) {
    
    case COMMENT_CREATE:
         return {
            ...state,
           comments: [...state.comments,action.data]
       }

       case COMMENTS_LOAD:
       const commentsNew = action.data.map(res=>{
           return{
               text:res.name,
               id:res.id
           }
       })    
       return{
               ...state,
               comments: commentsNew
}

       case COMMENT_UPDATE:
           const {data}=action;
           const {comments}= state;
           const itemIndex = comments.findIndex(res=> res.id===data.id);
         
           const nextComents = [
             ...comments.slice(0, itemIndex),
             data,
             ...comments.slice(itemIndex + 1)
         ];
         
           return {
            ...state,
            comments: nextComents
        //    comments: [...state.comments,action.data]
       }

       case COMMENT_DELETE:
        return (() => {
            const {id} =action;
            const {comments} = state;
            const itemIndex = comments.findIndex(res=> res.id===id);
         
           const nextComents = [
             ...comments.slice(0, itemIndex),
             ...comments.slice(itemIndex + 1)
         ];
         return {
            ...state,
            comments: nextComents
        //    comments: [...state.comments,action.data]
       }
    })();
         default:
            return state;
 }
}
