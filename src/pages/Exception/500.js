import React from 'react';
import Exception from '../../components/Exception';

import IntlMessage from '../../utils/IntlMessage';

const Exception500 = () => (
  <Exception
    type="500"
    desc={<IntlMessage id="app.exception.description.500" />}
    backText={<IntlMessage id="app.exception.back" />}
  />
);

export default Exception500;
