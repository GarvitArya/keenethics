import React from 'react';
import {render} from 'react-dom';

import HomePage from '/imports/ui/pages/home';

Meteor.startup(function () {
  render(<HomePage />, document.getElementById('react-root'));
});
