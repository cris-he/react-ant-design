import React, { Component } from 'react';
import { Checkbox, Alert, message, Icon } from 'antd';
import { Link } from 'react-router-dom';

import styles from './Login.less';
import AuthLayout from '../../layouts/AuthLayout';

import Login from '../../components/Login';
const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;


class LoginPage extends Component {
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
    const { type } = this.state;
    if (!err) {
      const { dispatch } = this.props;
      dispatch({
        type: 'login/login',
        payload: {
          ...values,
          type,
        },
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
    const { login, submitting } = this.props;
    const { type, autoLogin } = this.state;
    return (
      <AuthLayout>
        <div className={styles.main}>
          <Login
            defaultActiveKey={type}
            onTabChange={this.onTabChange}
            onSubmit={this.handleSubmit}
            ref={form => {
              this.loginForm = form;
            }}
          >
            <Tab key="account" tab={'app.login.tab-login-credentials'}>

              <UserName
                name="userName"
                placeholder={`${'app.login.userName'}: admin or user`}
                rules={[
                  {
                    required: true,
                    message: 'validation.userName.required',
                  },
                ]}
              />
              <Password
                name="password"
                placeholder={`${'app.login.password'}: ant.design`}
                rules={[
                  {
                    required: true,
                    message: 'validation.password.required',
                  },
                ]}
                onPressEnter={e => {
                  e.preventDefault();
                  this.loginForm.validateFields(this.handleSubmit);
                }}
              />
            </Tab>
            <Tab key="mobile" tab={'app.login.tab-login-mobile'}>

              <Mobile
                name="mobile"
                placeholder={'form.phone-number.placeholder'}
                rules={[
                  {
                    required: true,
                    message: 'validation.phone-number.required',
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: 'validation.phone-number.wrong-format',
                  },
                ]}
              />
              <Captcha
                name="captcha"
                placeholder={'form.verification-code.placeholder'}
                countDown={120}
                onGetCaptcha={this.onGetCaptcha}
                getCaptchaButtonText={'form.get-captcha'}
                getCaptchaSecondText={'form.captcha.second'}
                rules={[
                  {
                    required: true,
                    message: 'validation.verification-code.required',
                  },
                ]}
              />
            </Tab>
            <div>
              <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
                "app.login.remember-me"
            </Checkbox>
              <a style={{ float: 'right' }} href="">
                "app.login.forgot-password"
            </a>
            </div>
            <Submit loading={submitting}>
              "app.login.login"
          </Submit>
            <div className={styles.other}>
              "app.login.sign-in-with"
            <Icon type="alipay-circle" className={styles.icon} theme="outlined" />
              <Icon type="taobao-circle" className={styles.icon} theme="outlined" />
              <Icon type="weibo-circle" className={styles.icon} theme="outlined" />
              <Link className={styles.register} to="/user/register">
                "app.login.signup"
            </Link>
            </div>
          </Login>
        </div>
      </AuthLayout>
    );
  }
}

export default LoginPage;
