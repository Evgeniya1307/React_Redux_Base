import { useState } from "react";
import { commentCreate } from "./redux/action";
import SingleComment from "./SingleComment";
import uniqid from "uniqid";
import {useDispatch, useSelector} from "react-redux";


function Comments (props){
    const [textComment, setTextComment] = useState("");
    const comments = useSelector(state=>{
    const {commentsReducer} = state;
    return commentsReducer.comments;
    });
    const dispatch = useDispatch();
    
    
    const handleInput=(e)=>{
    setTextComment(e.target.value);
    }

    const handleSumbit=(e)=>{
        e.preventDefault();
        console.log("sumbit textComment>>>",textComment)
    const  id = uniqid();
    dispatch(commentCreate(textComment,id));
    }

    
    
    return (
        <div className="card-comments">
          <form className="comments-item-create">
          <input type="text" value={textComment}onChange={handleInput}/>
              <input type="sumbit" hidden/>
              </form>  
              {comments.length &&comments.map(res=>{
                  return <SingleComment key ={res.id} data={res}/>
              })}
              <SingleComment/>
        </div>
    )
}


export default Comments;