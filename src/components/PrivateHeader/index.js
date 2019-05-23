import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import styles from './index.less';
import RightContent from './RightContent';

import { Layout, Menu, Icon } from 'antd';
const { Header } = Layout;


class PrivateHeader extends Component {
    state = {
        collapsed: false,
    };

    componentWillUnmount() {
        this.triggerResizeEvent.cancel();
    }

    triggerResizeEvent() {
        const event = document.createEvent('HTMLEvents');
        event.initEvent('resize', true, false);
        window.dispatchEvent(event);
    }

    toggle = () => {
        const { handleSideMenuCollapse } = this.props;
        handleSideMenuCollapse();
        this.triggerResizeEvent();
    }

    render() {
        const { settings, handleSideMenuCollapse } = this.props;
        console.log('PrivateHeader', this.props);
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className={styles.trigger}
                    type={settings.collapsedSideMenu ? 'menu-unfold' : 'menu-fold'}
                    onClick={handleSideMenuCollapse}
                />
                <RightContent />
            </Header>
        );
    }
}

export default PrivateHeader;
