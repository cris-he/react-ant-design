
import React from 'react';
import { Link } from 'react-router-dom';

import IntlMessage from '../../utils/intl-message';

import styles from './index.less'

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
                <div className={styles.logo} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/dashboard">
                            <Icon type="user" />
                            <span><IntlMessage id="SideMenu-Dashboard"/></span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/simple">
                            <Icon type="video-camera" />
                            <span><IntlMessage id="SideMenu-Simple"/></span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default SideMenu;