import appLocaleData from 'react-intl/locale-data/zh';

import analysis from '../locales/zh-CN/analysis';
import exception from '../locales/zh-CN/exception';
import form from '../locales/zh-CN/form';
import globalHeader from '../locales/zh-CN/globalHeader';
import login from '../locales/zh-CN/login';
import menu from '../locales/zh-CN/menu';
import monitor from '../locales/zh-CN/monitor';
import result from '../locales/zh-CN/result';
import settingDrawer from '../locales/zh-CN/settingDrawer';
import settings from '../locales/zh-CN/settings';
import pwa from '../locales/zh-CN/pwa';
import component from '../locales/zh-CN/component';

const messages = {
  'navBar.lang': '语言',
  'layout.user.link.help': '帮助',
  'layout.user.link.privacy': '隐私',
  'layout.user.link.terms': '条款',
  'app.home.introduce': '介绍',
  'app.forms.basic.title': '基础表单',
  'app.forms.basic.description':
    '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
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

const zhCN = {
  messages: {...messages},
  locale: 'zh-CN',
  data: appLocaleData
}

export default zhCN;