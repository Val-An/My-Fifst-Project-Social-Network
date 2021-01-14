import {connect} from "react-redux";
import FriendsOnline from "./FriendsOnline";


let mapStateToProps = (state) => {
    return{
        userList: state.userList
    }
}

const friendsOnlineContainer = connect(mapStateToProps)(FriendsOnline);

export default friendsOnlineContainer;