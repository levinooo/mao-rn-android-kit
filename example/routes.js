import * as React from 'react';

import Home from './components/home';
import CoordinatorLayout from './components/coordinator-layout';
import Popupwindow from './components/popupwindow';
import ExtraDimensions from './components/extra-dimensions';

export default {
    'home': route('home', Home),
    'coordinator-layout': route('coordinator-layout', CoordinatorLayout),
    'popupwindow': route('popupwindow', Popupwindow),
    'extra-dimensions': route('extra-dimensions', ExtraDimensions)
};

function route(id, component) {
    return {
        id,
        component
    }
}
