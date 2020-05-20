import utils from './utils';
import {
  useState,
  useGetter,
  useMutation,
  useAction,
} from './hooks';

function baseInject(useFunction, data, moduleName) {
  if (utils.isArray(data)) {
    return data.reduce((output, key) => {
      output[key] = useFunction.call(this, key, moduleName);
      return output;
    }, {});
  }
  return false;
}

export function injectState(data, moduleName) {
  return baseInject.call(this, useState, data, moduleName);
}

export function injectGetters(data, moduleName) {
  return baseInject.call(this, useGetter, data, moduleName);
}

export function injectMutations(data, moduleName) {
  return baseInject.call(this, useMutation, data, moduleName);
}

export function injectActions(data, moduleName) {
  return baseInject.call(this, useAction, data, moduleName);
}
