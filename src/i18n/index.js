import enUs from './entries/en-US';
import zhCN from './entries/zh-CN';
import zhTW from './entries/zh-TW';
import ptBR from './entries/pt-BR';
import { addLocaleData } from 'react-intl';

const AppLocale = {
    'en-US': enUs,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    'pt-BR': ptBR,
};
addLocaleData(AppLocale['en-US'].data);
addLocaleData(AppLocale['zh-CN'].data);
addLocaleData(AppLocale['zh-TW'].data);
addLocaleData(AppLocale['pt-BR'].data);

export default AppLocale;