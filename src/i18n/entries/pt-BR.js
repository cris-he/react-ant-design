import appLocaleData from 'react-intl/locale-data/pt';

import analysis from '../locales/pt-BR/analysis';
import exception from '../locales/pt-BR/exception';
import form from '../locales/pt-BR/form';
import globalHeader from '../locales/pt-BR/globalHeader';
import login from '../locales/pt-BR/login';
import menu from '../locales/pt-BR/menu';
import monitor from '../locales/pt-BR/monitor';
import result from '../locales/pt-BR/result';
import settingDrawer from '../locales/pt-BR/settingDrawer';
import settings from '../locales/pt-BR/settings';
import pwa from '../locales/pt-BR/pwa';
import component from '../locales/pt-BR/component';

const messages = {
  'navBar.lang': 'Idiomas',
  'layout.user.link.help': 'ajuda',
  'layout.user.link.privacy': 'política de privacidade',
  'layout.user.link.terms': 'termos de serviços',
  'app.home.introduce': 'introduzir',
  'app.forms.basic.title': 'Basic form',
  'app.forms.basic.description':
    'Páginas de formulário são usadas para coletar e verificar as informações dos usuários e formulários básicos são comuns nos cenários onde existem alguns formatos de informações.',
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

const ptBR = {
  messages: {...messages},
  locale: 'pt-BR',
  data: appLocaleData
}

export default ptBR;
