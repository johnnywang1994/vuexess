# Vuexess

A library to help import things from Vuex in runtime.


## Install

```
npm i vuexess
// or
yarn add vuexess
```

```js
// main.js
import Vue from 'vue';
import Vuexess from 'vuexess';
import App from './App.vue';
import store from './store';

Vue.use(Vuexess, { store });

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
```


## Usage

Use `vuex` option in each vue component:

> Allows nested structure, now only supports for `Array`.

```js
export default {
  name: 'SampleComponent',

  vuex: {
    state: ['profile', 'todoList'],
    actions: ['getProfile', 'getTodos'],
    // 1 class child module
    Login: {
      state: ['loginStatus'],
      actions: ['postLogin', 'postLogout'],
      // 2 class child module
      User: {
        state: ['userInfo'],
      },
      // ...
    },
  },

  async mounted() {
    // then use like
    await this.getProfile();
  },
};
```

## Params in vuex options

  - `moduleName`: the module name which you had registered in your vuex.

|Param|Type|Description|
| --- | -- | --------- |
|state|array|rootState of vuex|
|getters|array|rootGetters of vuex|
|mutations|array|rootMutations of vuex|
|actions|array|rootActions of vuex|
|moduleName|object|modules registered in vuex|


## Optional API

There's two optional API that you can use to customize your own functions to use.

1. useStore()

This will get the store instance in the Vue app. Since the store will be provided after store init, If you use this before `Vue.use(Vuexess, { store })`, It's still `null`

```js
// some module
import { useStore } from 'vuexess';

// Since the store is not yet provided, always use a function to get the store content
export const nowModal = () => useStore().state.Modal.name;
```

2. access(actionKey, modulePath)

  - **actionKey**
    
    Action method's key in target module.

  - **modulePath**

    Target module path, if it's root, then no need for this modulePath

```js
// custom JS module
import { access } from 'vuexess';

// Game Module
export const getProfile = access('getProfile', 'Game');


// Modal module
export const updateModal = access('updateModal', 'Modal');

export const closeModal = access('closeModal', 'Modal');


// Game => Test module
export const someTest = access('someTest', 'Game/Test');
```



## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, Johnny Wang