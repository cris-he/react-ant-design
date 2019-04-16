import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';


import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;


class Simple extends Component {
    render() {
        return (
            <Content style={{
                margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
            }}
            >
                Simple
            </Content>
        );
    }
}

export default Simple;
