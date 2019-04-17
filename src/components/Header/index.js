import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import RightContent from './RightContent';

import { Layout, Menu, Icon } from 'antd';
const { Header } = Layout;


class BasicHeader extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
                <RightContent />
            </Header>
        );
    }
}

export default BasicHeader;
