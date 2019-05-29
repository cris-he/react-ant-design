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

    getHeadWidth = () => {
        const { isMobile, collapsedSideMenu, fixedHeader } = this.props.settings;
        if (isMobile || !fixedHeader) {
            return '100%';
        }
        return collapsedSideMenu ? 'calc(100% - 80px)' : 'calc(100% - 256px)';
    };

    render() {
        const { settings, handleSideMenuCollapse } = this.props;
        const width = this.getHeadWidth();
        console.log('PrivateHeader', this.props);
        return (
            <Header style={{ padding: 0, width }} className={settings.fixedHeader ? styles.fixedHeader : ''}>
                <div className={styles.header}>
                    <span className={styles.trigger} onClick={handleSideMenuCollapse}>
                        <Icon type={settings.collapsedSideMenu ? 'menu-unfold' : 'menu-fold'} />
                    </span>
                    <RightContent />
                </div>
            </Header>
        );
    }
}

export default PrivateHeader;
