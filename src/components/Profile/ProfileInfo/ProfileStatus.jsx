import React from 'react';
import style from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode(){
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode(){
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span><b>Status: </b></span><span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input type="text" onBlur={this.deactivateEditMode.bind(this)} autoFocus={true} value={this.props.status}/>
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;