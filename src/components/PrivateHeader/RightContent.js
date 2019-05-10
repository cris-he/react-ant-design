import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authAction from '../../actions/auth-action';
import * as settingAction from '../../actions/setting-action';

import IntlMessage from '../../utils/IntlMessage';

import styles from './index.less';

import { Button, Spin, Tag, Menu, Icon, Avatar, Tooltip, Dropdown } from 'antd';

import SelectLang from '../SelectLang';

class BasicHeaderRightContent extends PureComponent {

    componentDidMount() {
        // console.log('style', styles)
    }

    render() {
        // const { user } = this.props;
        const menu = (
            <Menu className={styles.menu} selectedKeys={[]} >
                <Menu.Item key="userCenter">
                    <Icon type="user" />
                    Profile 
                </Menu.Item>
                <Menu.Item key="userinfo">
                    <Icon type="setting" />
                     Settings
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="logout">
                    <Icon type="logout" />
                    Logout
                </Menu.Item>
            </Menu>
        );

        return (
            <div className={styles.right}>
                <Dropdown overlay={menu}>
                    <span className={`${styles.action} ${styles.account}`}>
                        <Avatar
                            size="small"
                            className={styles.avatar}
                            src="https://www.shareicon.net/download/2016/08/01/640603_game.ico"
                            alt="avatar"
                        />
                        <span className={styles.name}>Kris He</span>
                    </span>
                </Dropdown>
                <SelectLang className={styles.action} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log('mapStateToProps: RightContent', state, ownProps);
    return {
        user: state.user,
        settings: state.settings
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authAction: bindActionCreators(authAction, dispatch),
        settingAction: bindActionCreators(settingAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicHeaderRightContent);