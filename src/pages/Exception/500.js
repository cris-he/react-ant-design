import React from 'react';
import Exception from '../../components/Exception';

import IntlMessage from '../../utils/IntlMessage';

const Exception500 = () => (
  <Exception
    type="500"
    desc={<IntlMessage id="SideMenu-Exception-500" />}
    backText={<IntlMessage id="SideMenu-Exception-Back-Button" />}
  />
);

export default Exception500;
