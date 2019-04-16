
import React from 'react';

import SideMenu from '../components/SideMenu';
import BasicHeader from '../components/Header';

import 'antd/dist/antd.css';
import { Layout } from 'antd';


class BasicLayout extends React.Component {
    state = {
        collapsed: false,
    };


    componentDidMount() {
        console.log('layout', this.props)
    }

    render() {
        const { children } = this.props;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SideMenu />
                <Layout>
                    <BasicHeader />
                    {children}
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout;