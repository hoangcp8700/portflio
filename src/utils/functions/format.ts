export function baseStr(text?: string) {
  return text || '';
}

export function baseSlug(slug: string) {
  return `/${slug}`;
}

export function renderMoney(val: number, prefix?: string, unit?: string) {
  const converted = val.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, prefix || '.');
  return unit ? `${converted} ${unit}` : converted;
}

export function parseFormatMaskInput(text: string, prefix: string): string {
  if (!text) return '';
  return text.replaceAll(new RegExp(prefix, 'g'), '');
}

// slugify('Hello World!'); // 'hello-world'
export const slugify = (str: string) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// for search
export function removeAccents(str: string) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

// random array
export function getShuffledArr<T>(arr: Array<T>) {
  return [...arr].map((_, i, arrCopy: Array<T>) => {
    const rand = i + Math.floor(Math.random() * (arrCopy.length - i));
    // eslint-disable-next-line no-param-reassign
    [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]];
    return arrCopy[i];
  });
}
