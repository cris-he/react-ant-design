
import React from 'react';

import SideMenu from '../components/SideMenu';
import PrivateHeader from '../components/PrivateHeader';

import styles from './PrivateLayout.less';

import { Layout } from 'antd';
const { Content } = Layout;


class PrivateLayout extends React.Component {
    state = {
        collapsed: false,
    };


    componentDidMount() {
        // console.log('PrivateLayout', styles)
    }

    render() {
        const { children } = this.props;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SideMenu />
                <Layout>
                    <PrivateHeader />
                    <Content className={styles.content}>
                        {children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default PrivateLayout;