import { createStore, compose } from 'redux';
import { Reducers } from '../reducers';

export const Store = createStore(Reducers,
    compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    );