import React from 'react';
import Exception from '../../components/Exception';

import IntlMessage from '../../utils/IntlMessage';

const Exception404 = () => (
  <Exception
    type="404"
    desc={<IntlMessage id="app.exception.description.404" />}
    backText={<IntlMessage id="app.exception.back" />}
  />
);

export default Exception404;
