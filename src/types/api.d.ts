type ResponseAPIType<T> = {
  data: T;
  message?: {
    [lang: string]: string;
  };
};
