import {addMessageAC, onMessageChangeAC} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addMessage: () => {
            dispatch(addMessageAC());
        },
        onMessageChange: (text) => {
            dispatch(onMessageChangeAC(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;