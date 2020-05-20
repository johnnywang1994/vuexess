# Vuexess

A library to help import things from Vuex in runtime.


## Install

```
npm i vuexess
// or
yarn add vuexess
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


## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, Johnny Wang