import React from 'react';
// import style from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatusThunk(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span><b>Status: </b></span><span onDoubleClick={this.activateEditMode}>{this.props.status || "*****"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} type="text" onBlur={this.deactivateEditMode} autoFocus={true} value={this.state.status}/>
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;