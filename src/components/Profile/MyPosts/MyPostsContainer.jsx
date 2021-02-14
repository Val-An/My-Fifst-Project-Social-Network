import {addPost, onPostChange} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {
//             dispatch(addPost());
//         },
//         onPostChange: (text) => {
//             dispatch(onPostChange(text));
//         }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, {addPost, onPostChange})(MyPosts);

export default MyPostsContainer;