
import React from 'react';

import SideMenu from '../components/SideMenu';
import BasicHeader from '../components/BasicHeader';

import styles from './BasicLayout.less';

import { Layout } from 'antd';
const { Content } = Layout;


class BasicLayout extends React.Component {
    state = {
        collapsed: false,
    };


    componentDidMount() {
        console.log('BasicLayout', styles)
    }

    render() {
        const { children } = this.props;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SideMenu />
                <Layout>
                    <BasicHeader />
                    <Content className={styles.content}>
                        {children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout;