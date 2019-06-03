import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authAction from '../../actions/auth-action';
import * as settingAction from '../../actions/setting-action';

import styles from './index.less';
import { Menu, Icon } from 'antd';

import classNames from 'classnames';
import HeaderDropdown from '../HeaderDropdown';

class SelectLang extends PureComponent {
  changeLang = ({ key }) => {
    console.log('SelectLang: changeLang', key)
    // setLocale(key);
  };

  render() {
    const { className } = this.props;
    const selectedLang = this.props.settings.locale;
    const locales = ['zh-CN', 'zh-TW', 'en-US', 'pt-BR'];
    const languageLabels = {
      'zh-CN': '简体中文',
      'zh-TW': '繁体中文',
      'en-US': 'English',
      'pt-BR': 'Português',
    };
    const languageIcons = {
      'zh-CN': '🇨🇳',
      'zh-TW': '🇭🇰',
      'en-US': '🇬🇧',
      'pt-BR': '🇧🇷',
    };
    const langMenu = (
      <Menu className={styles.menu} selectedKeys={[selectedLang]} onClick={({ key }) => this.props.settingAction.setLocale(key)}>
        {locales.map(locale => (
          <Menu.Item key={locale}>
            <span role="img" aria-label={languageLabels[locale]}>
              {languageIcons[locale]}
            </span>{' '}
            {languageLabels[locale]}
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      <HeaderDropdown overlay={langMenu} placement="bottomRight">
        <span className={classNames(styles.dropDown, className)}>
          <Icon type="global" />
        </span>
      </HeaderDropdown>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('mapStateToProps: SelectLang', state, ownProps);
  return {
    settings: state.settings
  }
}

function mapDispatchToProps(dispatch) {
  return {
    settingAction: bindActionCreators(settingAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectLang);
