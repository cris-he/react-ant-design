import React from 'react';
import Exception from '../../components/Exception';

import IntlMessage from '../../utils/IntlMessage';

const Exception403 = () => (
  <Exception
    type="403"
    desc={<IntlMessage id="SideMenu-Exception-403" />}
    backText={<IntlMessage id="SideMenu-Exception-Back-Button" />}
  />
);

export default Exception403;
