import {useState} from "react";

function SingleComment (props){
    const [textComment, setTextComment] = useState("");
    console.log("swingle comment props>>>>", props);
    
    return (
          <form className="comments-item">
              <div className="comments-item-delete">&times;</div>
              <input type="text" value={textComment}onChange={handleInput}/>
              <input type="sumbit" hidden/>
              </form>    
    )
}


export default SingleComment;