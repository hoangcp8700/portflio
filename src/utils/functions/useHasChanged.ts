// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function hasValueChanged(oldValue: any, newValue: any) {
  if (typeof oldValue !== typeof newValue) {
    return true;
  }
  if (Array.isArray(oldValue) && Array.isArray(newValue)) {
    if (oldValue.length !== newValue.length) {
      return true;
    }
    for (let i = 0; i < oldValue.length; i++) {
      if (hasValueChanged(oldValue[i], newValue[i])) {
        return true;
      }
    }
    return false;
  }
  if (typeof oldValue === 'object' && typeof newValue === 'object') {
    const oldKeys = Object.keys(oldValue);
    const newKeys = Object.keys(newValue);

    if (oldKeys.length !== newKeys.length) return true;

    // eslint-disable-next-line no-restricted-syntax
    for (const key of oldKeys) {
      if (newValue[key] === undefined || hasValueChanged(oldValue[key], newValue[key])) {
        return true;
      }
    }

    return false;
  }
  return oldValue !== newValue;
}
