import React from 'react';
import Exception from '../../components/Exception';

import IntlMessage from '../../utils/IntlMessage';

const Exception403 = () => (
  <Exception
    type="403"
    desc={<IntlMessage id="app.exception.description.403" />}
    backText={<IntlMessage id="app.exception.back" />}
  />
);

export default Exception403;
