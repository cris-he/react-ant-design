import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Content style={{
                    margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                }}
                >
                    Dashboard
                    </Content>
            </div>
        );
    }
}

export default Dashboard;
