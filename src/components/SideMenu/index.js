
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import IntlMessage from '../../utils/IntlMessage';

import styles from './index.less'

import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

class SideMenu extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        console.log('SideMenu - indexjs: props', this.props);
    }

    render() {
        const { collapsedSideMenu, fixedSideMenu, theme } = this.props.settings;

        const siderClassName = classNames(styles.sider, {
            [styles.fixSiderBar]: fixedSideMenu,
            [styles.light]: theme === 'light',
        });

        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsedSideMenu}
                width={256}
                className={siderClassName}

            >
                <div className={styles.logo} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="Dashboard">
                        <Link to="/dashboard">
                            <Icon type="dashboard" />
                            <span><IntlMessage id="menu.dashboard" /></span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="Simple">
                        <Link to="/simple">
                            <Icon type="check-circle" />
                            <span><IntlMessage id="menu.simple" /></span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="Exception"
                        title={
                            <span>
                                <Icon type="warning" />
                                <span><IntlMessage id="menu.exception" /></span>
                            </span>
                        }
                    >
                        <Menu.Item key="Exception403">
                            <Link to="/exception/403">
                                403
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="Exception404">
                            <Link to="/exception/404">
                                404
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="Exception500">
                            <Link to="/exception/500">
                                500
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default SideMenu;