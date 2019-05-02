import React, { PureComponent } from 'react';
import { Button,  Spin, Tag, Menu, Icon, Avatar, Tooltip, Dropdown } from 'antd';
import styles from './index.less';

export default class GlobalHeaderRight extends PureComponent {

    componentDidMount() {
        console.log('style', styles)
    }

    render() {

        const menu = (
            <Menu className={styles.menu} selectedKeys={[]} >
                <Menu.Item key="userCenter">
                    <Icon type="user" />
                    account center
                </Menu.Item>
                <Menu.Item key="userinfo">
                    <Icon type="setting" />
                    account settings
                </Menu.Item>
                <Menu.Item key="triggerError">
                    <Icon type="close-circle" />
                    Trigger Error
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="logout">
                    <Icon type="logout" />
                    logout
                </Menu.Item>
            </Menu>
        );

        let className = styles.right;
        return (
            <div className={styles.right}>
                <Dropdown overlay={menu}>
                    <span className={`${styles.action} ${styles.account}`}>
                        <Avatar
                            size="small"
                            className={styles.avatar}
                            // src={currentUser.avatar}
                            alt="avatar"
                        />
                        <span className={styles.name}>Kris He</span>
                    </span>
                </Dropdown>
            </div>
        );
    }
}
