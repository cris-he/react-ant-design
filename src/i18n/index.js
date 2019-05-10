import enLang from './entries/en-US';
import zhLang from './entries/zh-Hans-CN';
import { addLocaleData } from 'react-intl';

const AppLocale = {
    'en-US': enLang,
    'zh-Hans-CN': zhLang,
};
addLocaleData(AppLocale['en-US'].data);
addLocaleData(AppLocale['zh-Hans-CN'].data);

export default AppLocale;