import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authAction from '../../actions/auth-action'

import IntlMessage from '../../utils/IntlMessage';

import styles from './Login.less';
import { Checkbox, Alert, message, Icon } from 'antd';

import Login from '../../components/Login';
const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

class LoginPage extends Component {

  componentDidMount() {
    console.log('login page props: ', this.props)
  }

  state = {
    type: 'account',
    autoLogin: true,
  };

  onTabChange = type => {
    this.setState({ type });
  };

  onGetCaptcha = () =>
    new Promise((resolve, reject) => {
      this.loginForm.validateFields(['mobile'], {}, (err, values) => {
        if (err) {
          reject(err);
        } else {
          const { dispatch } = this.props;
          dispatch({
            type: 'login/getCaptcha',
            payload: values.mobile,
          })
            .then(resolve)
            .catch(reject);
          message.warning('app.login.verification-code-warning');
        }
      });
    });

  handleSubmit = (err, values) => {
    if (!err) {
      this.props.authAction.signIn({
        email: 'fake@admin',
        password: '123'
      });
    }
  };

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    const isAuthenticated = this.props.user;
    const intl = this.props;
    if (isAuthenticated && isAuthenticated.token) {
      return <Redirect to='/dashboard' />;
    }

    const { submitting } = this.props;
    const { type, autoLogin } = this.state;
    return (
      <div className={styles.main}>
        <Login
          defaultActiveKey={type}
          onTabChange={this.onTabChange}
          onSubmit={this.handleSubmit}
          ref={form => {
            this.loginForm = form;
          }}
        >
          <Tab key="account" tab={<IntlMessage id='app.login.tab-login-credentials' />}>

            <UserName
              name="userName"
              placeholder={<IntlMessage id='app.login.userName' />}
              rules={[
                {
                  required: true,
                  message: <IntlMessage id='validation.userName.required' />,
                },
              ]}
            />
            <Password
              name="password"
              placeholder={<IntlMessage id='app.login.password' />}
              rules={[
                {
                  required: true,
                  message: <IntlMessage id='validation.password.required' />,
                },
              ]}
              onPressEnter={e => {
                e.preventDefault();
                this.loginForm.validateFields(this.handleSubmit);
              }}
            />
          </Tab>
          <Tab key="mobile" tab={<IntlMessage id='app.login.tab-login-mobile' />}>

            <Mobile
              name="mobile"
              placeholder={<IntlMessage id='form.phone-number.placeholder' />}
              rules={[
                {
                  required: true,
                  message: <IntlMessage id='validation.phone-number.required' />,
                },
                {
                  pattern: /^1\d{10}$/,
                  message: <IntlMessage id='validation.phone-number.wrong-format' />,
                },
              ]}
            />
            <Captcha
              name="captcha"
              placeholder={<IntlMessage id='form.verification-code.placeholder' />}
              countDown={120}
              onGetCaptcha={this.onGetCaptcha}
              getCaptchaButtonText={<IntlMessage id='form.get-captcha' />}
              getCaptchaSecondText={<IntlMessage id='form.captcha.second' />}
              rules={[
                {
                  required: true,
                  message: <IntlMessage id='validation.verification-code.required' />,
                },
              ]}
            />
          </Tab>
          <div>
            <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
              <IntlMessage id="app.login.remember-me" />
            </Checkbox>
            <a style={{ float: 'right' }} href="">
              <IntlMessage id="app.login.forgot-password" />
            </a>
          </div>
          <Submit loading={submitting}>
            <IntlMessage id="app.login.login" />
          </Submit>
          <div className={styles.other}>
            <IntlMessage id="app.login.sign-in-with" />
            <Icon type="alipay-circle" className={styles.icon} theme="outlined" />
            <Icon type="taobao-circle" className={styles.icon} theme="outlined" />
            <Icon type="weibo-circle" className={styles.icon} theme="outlined" />
            <Link className={styles.register} to="/user/register">
              <IntlMessage id="app.login.signup" />
            </Link>
          </div>
        </Login>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('mapStateToProps: Auth', state, ownProps);
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authAction: bindActionCreators(authAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
