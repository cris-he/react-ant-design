import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

class formatMessage extends Component {
    render() {
        const { intl } = this.props;
        return intl.formatMessage(this.props);
    }
};

export default injectIntl(formatMessage, {
    withRef: false
});
