declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.txt';
declare module '*.svg';
declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.svg?r' {
  const content: React.ElementType<React.ComponentPropsWithRef<'svg'>>;
  export default content;
}

declare module '*.json' {
  const content: Record<string, string>;
  export default content;
}
