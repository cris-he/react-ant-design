import React from 'react';
import Exception from '../../components/Exception';

import IntlMessage from '../../utils/IntlMessage';

const Exception404 = () => (
  <Exception
    type="404"
    desc={<IntlMessage id="SideMenu-Exception-404" />}
    backText={<IntlMessage id="SideMenu-Exception-Back-Button" />}
  />
);

export default Exception404;
