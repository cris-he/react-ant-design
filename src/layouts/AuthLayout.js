import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import DocumentTitle from 'react-document-title';
import styles from './AuthLayout.less';


const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2019 Kris
  </Fragment>
);

class AuthLayout extends Component {

  render() {
    const {
      children,
    } = this.props;
    return (
      <DocumentTitle title="Untitled">
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <img alt="logo" className={styles.logo} src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/70/706e041286da49ccdac503882d75a6484cf3c4a4_full.jpg' />
                  <span className={styles.title}>Ant Design</span>
                </Link>
              </div>
              <div className={styles.desc}>Ant Design 是西湖区最具影响力的 Web 设计规范</div>
            </div>
            {children}
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default AuthLayout;
