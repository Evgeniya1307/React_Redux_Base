import { useState } from "react";
import { commentCreate } from "./redux/action";
import SingleComment from "./SingleComment";
import uniqid from "uniqid";
import {useDispatch, useSelector} from "react-redux";


function Comments (props){
    const [textComment, setTextComment] = useState("");
    const comments = useSelector(state=> {
    const {commentsReducer} = state;
    return commentsReducer.comments;
    });
    const dispatch = useDispatch();
    
    
    const handleInput = (e)=>{
    setTextComment(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    const  id = uniqid();
    dispatch(commentCreate(textComment,id));
    }

    return (
        <div className="card-comments">
          <form onSubmit={handleSubmit} className="comments-item-create">
          <input type="text" value={textComment}onChange={handleInput}/>
              <input type="submit" hidden/>
              </form>  
              {!!comments.length && comments.map(res=>{
                  return <SingleComment key ={res.id} data={res}/>
              })}
        </div>
    )
}


export default Comments;