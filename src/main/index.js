/* React */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

/* Redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authAction from '../actions/auth-action';
import * as settingAction from '../actions/setting-action';

/* i18n Support */
import { IntlProvider } from 'react-intl';
import i18n from '../i18n';

/* Local Storage Utilities */
import { setLocale, getLocale, removeLocale } from '../utils/local-storage';

/* Pages */
import PrivatePage from './PrivatePage';
import PublicPage from './PublicPage';


function RestrictedRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                rest.auth.token ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/auth/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

class Main extends Component {
    render() {
        // console.log('Root: props', this.props);
        const appLocale = i18n[this.props.settings.locale];

        return (
            <IntlProvider
                locale={appLocale.locale}
                messages={appLocale.messages}
            >
                <BrowserRouter>
                    <Switch>
                        <Route path="/auth" component={PublicPage} />
                        <RestrictedRoute path='/' component={PrivatePage} auth={this.props.user} />
                    </Switch>
                </BrowserRouter>
            </IntlProvider>
        )
    }
}


function mapStateToProps(state, ownProps) {
    console.log('mapStateToProps: Main', state, ownProps);
    return {
        user: state.user,
        settings: state.settings
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authAction: bindActionCreators(authAction, dispatch),
        settingAction: bindActionCreators(settingAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);