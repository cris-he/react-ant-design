
import { Link } from 'react-router-dom';
import React from 'react';

import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

class SideMenu extends React.Component {
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
            <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/dashboard">
                            <Icon type="user" />
                            <span>Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/simple">
                            <Icon type="video-camera" />
                            <span>Simple</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default SideMenu;