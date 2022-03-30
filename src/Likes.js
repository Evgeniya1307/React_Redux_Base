import {connect} from "react-redux";
import {incrementLikes, decrementlikes} from "./redux/action"

function Likes (props) {
    console.log(props);
    return(
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>♥{props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}

function mapStateToProps(state) {
    const {likesReducer} =state;
    return {
        likes:likesReducer.likes
    }
}

function mapDispatchToProps(dispatch){
    return{
        onIncrementLikes: ()=> dispatch(incrementLikes()),
        onDecrementLikes: ()=> dispatch(decrementlikes())
        }
    }

export default connect(mapStateToProps,mapDispatchToProps) (Likes);