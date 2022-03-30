function SingleComment (props){
    console.log("swingle comment props>>>>", props);
    
    return (
          <form className="comments-item">
              <div className="comments-item-delete">&times;</div>
              <input type="text"/>
              <input type="sumbit" hidden/>
              </form>    
    )
}


export default SingleComment;