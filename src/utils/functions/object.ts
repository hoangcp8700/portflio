/* eslint-disable no-param-reassign */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, Object.create(null) as Pick<T, K>);
}

export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  return Object.keys(obj)
    .filter((key) => !keys.includes(key as K))
    .reduce((acc, key) => {
      (acc as { [key in keyof T]: T[key] })[key as keyof T] = obj[key as keyof T];
      return acc;
    }, Object.create(null) as Omit<T, K>);
}
