import appLocaleData from 'react-intl/locale-data/en';

import analysis from '../locales/en-US/analysis';
import exception from '../locales/en-US/exception';
import form from '../locales/en-US/form';
import globalHeader from '../locales/en-US/globalHeader';
import login from '../locales/en-US/login';
import menu from '../locales/en-US/menu';
import monitor from '../locales/en-US/monitor';
import result from '../locales/en-US/result';
import settingDrawer from '../locales/en-US/settingDrawer';
import settings from '../locales/en-US/settings';
import pwa from '../locales/en-US/pwa';
import component from '../locales/en-US/component';

const messages = {
  'navBar.lang': 'Languages',
  'layout.user.link.help': 'Help',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.home.introduce': 'introduce',
  'app.forms.basic.title': 'Basic form',
  'app.forms.basic.description':
    'Form pages are used to collect or verify information to users, and basic forms are common in scenarios where there are fewer data items.',
  ...analysis,
  ...exception,
  ...form,
  ...globalHeader,
  ...login,
  ...menu,
  ...monitor,
  ...result,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
};

const enUs = {
  messages: {...messages},
  locale: 'en-US',
  data: appLocaleData
}

export default enUs;