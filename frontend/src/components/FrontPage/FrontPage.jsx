import React, { Component } from 'react';
// import Card from 'react-bootstrap/card';

export default class FrontPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    onClick = () => {
        this.props.update();
        // console.log(this.state.username);
        // console.log(this.state.password);
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
            <div id={'log-in-credentials'}>
                <input id={'username'} value={this.state.username} onChange={event => this.updateUsernameValue(event)} name={'username'} placeholder={'Username'}/>
                <input id={'password'} value={this.state.password} onChange={event => this.updatePasswordValue(event)} name={'password'} placeholder={'Password'}/>
                <button id={'sign-in'} onClick = {this.onClick}>Sign In</button>
            </div>
        )
    }
}