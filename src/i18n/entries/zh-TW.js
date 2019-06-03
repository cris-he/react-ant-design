import appLocaleData from 'react-intl/locale-data/zh';

import analysis from '../locales/zh-TW/analysis';
import exception from '../locales/zh-TW/exception';
import form from '../locales/zh-TW/form';
import globalHeader from '../locales/zh-TW/globalHeader';
import login from '../locales/zh-TW/login';
import menu from '../locales/zh-TW/menu';
import monitor from '../locales/zh-TW/monitor';
import result from '../locales/zh-TW/result';
import settingDrawer from '../locales/zh-TW/settingDrawer';
import settings from '../locales/zh-TW/settings';
import pwa from '../locales/zh-TW/pwa';
import component from '../locales/zh-TW/component';

const messages = {
  'navBar.lang': '語言',
  'layout.user.link.help': '幫助',
  'layout.user.link.privacy': '隱私',
  'layout.user.link.terms': '條款',
  'app.home.introduce': '介紹',
  'app.forms.basic.title': '基礎表單',
  'app.forms.basic.description':
    '表單頁用於向用戶收集或驗證信息，基礎表單常見於數據項較少的表單場景。',
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

const zhTW = {
  messages: {...messages},
  locale: 'zh-TW',
  data: appLocaleData
}

export default zhTW;