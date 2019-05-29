
import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as settingAction from '../actions/setting-action';


import SideMenu from '../components/SideMenu';
import PrivateHeader from '../components/PrivateHeader';

import styles from './PrivateLayout.less';

import { Layout } from 'antd';
const { Content } = Layout;


class PrivateLayout extends React.Component {
    componentDidMount() {
        // console.log('PrivateLayout', styles)
    }

    getLayoutStyle = () => {
        const { fixedSideMenu, isMobile, collapsedSideMenu } = this.props.settings;
        if (fixedSideMenu && !isMobile) {
            return {
                paddingLeft: collapsedSideMenu ? '0px' : '0px',
            };
        }
        return null;
    };

    handleSideMenuCollapse = () => {
        this.props.settingAction.handleSideMenuCollapse();
    };

    render() {
        const { children, fixedHeader } = this.props;
        const contentStyle = !fixedHeader ? { paddingTop: 0 } : {};
        return (
            <Layout>
                <SideMenu
                    handleSideMenuCollapse={this.handleSideMenuCollapse}
                    {...this.props}
                />
                <Layout
                    style={{
                        ...this.getLayoutStyle(),
                        minHeight: '100vh',
                    }}>
                    <PrivateHeader
                        handleSideMenuCollapse={this.handleSideMenuCollapse}
                        // logo={logo}
                        // isMobile={isMobile}
                        {...this.props}
                    />
                    <Content className={styles.content} style={contentStyle}>
                        {children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log('mapStateToProps: PrivateLayout', state, ownProps);
    return {
        settings: state.settings
    }
}

function mapDispatchToProps(dispatch) {
    return {
        settingAction: bindActionCreators(settingAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateLayout);