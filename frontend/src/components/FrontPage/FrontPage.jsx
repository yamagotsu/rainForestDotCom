import React, { Component } from 'react';

export default class FrontPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    onClick = () => {
        this.props.handleLogin()
    }

    updateUsernameValue(event) {
        this.setState({
            username: event.target.value,
        });
    }

    updatePasswordValue(event) {
        this.setState({
            password: event.target.value,
        });
    }

    render() {
        return (
            <div className="d-flex align-items-center justify-content-center h-100 w-100">
                <div className="card card-primary p-4">
                    <div>
                        <div id={'log-in-credentials'} class="row">
                            <input className="my-1" id={'username'} value={this.state.username} onChange={event => this.updateUsernameValue(event)} name={'username'} placeholder={'Username'}/>
                            <input className="my-1" id={'password'} value={this.state.password} onChange={event => this.updatePasswordValue(event)} name={'password'} placeholder={'Password'}/>
                            <button className="my-1 btn btn-success" id={'sign-in'} onClick = {this.onClick}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}