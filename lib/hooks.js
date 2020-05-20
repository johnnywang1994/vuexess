export function useState(key, moduleName) {
  if (moduleName) {
    let target = this.state;
    moduleName.split('/').forEach((path) => {
      target = target[path];
    })
    return () => target[key];
  }
  return () => this[key];
}

export function useGetter(key, moduleName) {
  if (moduleName) {
    return () => this.getters[`${moduleName}/${key}`];
  }
  return () => this.getters[key];
}

export function useMutation(key, moduleName) {
  if (moduleName) {
    return (payload) => this.commit(`${moduleName}/${key}`, payload);
  }
  return (payload) => this.commit(key, payload);
}

export function useAction(key, moduleName) {
  if (moduleName) {
    return (payload) => this.dispatch(`${moduleName}/${key}`, payload);
  }
  return (payload) => this.dispatch(key, payload);
}
