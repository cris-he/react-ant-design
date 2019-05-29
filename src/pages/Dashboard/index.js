import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authAction from '../../actions/auth-action';

import IntlMessage from '../../utils/IntlMessage';

import { Button, Row, Col, Card, List, Avatar } from 'antd';

import ContentHeader from '../../components/ContentHeader';

import { Layout } from 'antd';

import styles from './index.less';

import { PageHeader, Typography } from 'antd';
const { Paragraph } = Typography;


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // this.props.authAction.signIn({
        //     email: 'fake@admin',
        //     password: '123'
        // })
    }

    showSomething() {
        console.log('props', this.props)
        console.log('state', this.state)
    }

    render() {
        console.log('Dashboard: props', this.props)

        const HeaderContent =
            this.props.user.token ? (
                <div className={styles.pageHeaderContent}>
                    <div className={styles.avatar}>
                        <Avatar size="large" src="https://www.shareicon.net/download/2016/08/01/640603_game.ico" />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.contentTitle}>
                            早安，
                {this.props.user.token}
                            ，祝你开心每一天！
              </div>
                        <div>
                            {this.props.user.token} |{this.props.user.token}
                        </div>
                    </div>
                </div>
            ) : null;

        const extraContent = (
            <div className={styles.extraContent}>
                <div className={styles.statItem}>
                    <p>项目数</p>
                    <p>56</p>
                </div>
                <div className={styles.statItem}>
                    <p>团队内排名</p>
                    <p>
                        8<span> / 24</span>
                    </p>
                </div>
                <div className={styles.statItem}>
                    <p>项目访问</p>
                    <p>2,223</p>
                </div>
            </div>
        );

        return (
            <div>
                <ContentHeader content={HeaderContent} extraContent={extraContent} />
                <Button onClick={() => this.showSomething()}>TEST</Button>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log('mapStateToProps: Dashboard', state, ownProps);
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authAction: bindActionCreators(authAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);