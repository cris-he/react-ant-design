import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authAction from '../../actions/auth-action';

import IntlMessage from '../../utils/IntlMessage';

import { Button } from 'antd';


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // this.props.authAction.signIn({
        //     email: 'fake@admin',
        //     password: '123'
        // })
    }

    showSomething() {
        console.log('props', this.props)
        console.log('state', this.state)
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.showSomething()}>TEST</Button>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log('mapStateToProps: Dashboard', state, ownProps);
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authAction: bindActionCreators(authAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);