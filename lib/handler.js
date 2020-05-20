/* eslint-disable no-use-before-define */
import utils from './utils';
import {
  injectState,
  injectGetters,
  injectMutations,
  injectActions,
} from './injection';

function injectOptions(
  options,
  target,
  moduleName,
) {
  const { state, getters, mutations, actions } = target;
  options.computed = {
    ...options.computed,
    ...(state && injectState.call(this, state, moduleName)),
    ...(getters && injectGetters.call(this, getters, moduleName))
  };
  options.methods = {
    ...options.methods,
    ...(mutations && injectMutations.call(this, mutations, moduleName)),
    ...(actions && injectActions.call(this, actions, moduleName))
  };
  handleModule.call(
    this,
    options,
    target,
    moduleName,
  );
}

export function handleModule(
  options,
  target,
  parentPath,
) {
  const allKeys = Object.keys(target);
  allKeys.forEach((key) => {
    if (!utils.vuexTypes.has(key)) {
      injectOptions.call(
        this,
        options,
        target[key],
        parentPath ? `${parentPath}/${key}` : key,
      );
    }
  });
}

export function handleRoot(options) {
  injectOptions.call(this, options, options.vuex);
}
