const isObject = (v) => v !== null && typeof v === 'object';

const isArray = (v) => Array.isArray(v);

const vuexTypes = new Set(['state', 'getters', 'mutations', 'actions']);

export default {
  isObject,
  isArray,
  vuexTypes,
}
