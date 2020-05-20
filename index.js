/* eslint-disable */
import utils from './lib/utils';
import { handleRoot } from './lib/handler';
import { useAction } from './lib/hooks';


/* */


let StoreInstance = null;

function provideStore(store) {
  StoreInstance = store;
}

function analyzeVuex() {
  const options = this.$options;
  const { vuex } = options;
  if (utils.isObject(vuex)) {
    handleRoot.call(StoreInstance, options);
  }
}

function install(Vue, { store }) {
  provideStore(store);
  Vue.mixin({
    beforeCreate: analyzeVuex,
  });
}

export default {
  install,
}

export const useStore = () => StoreInstance;

export const access = () => useAction.bind(StoreInstance, arguments);
