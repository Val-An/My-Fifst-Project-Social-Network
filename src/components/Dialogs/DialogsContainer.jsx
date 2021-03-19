import {addMessageAC, onMessageChangeAC} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

// const AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
//
// export default DialogsContainer;