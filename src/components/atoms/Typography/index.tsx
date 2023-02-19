import clsx from 'clsx';
import React from 'react';

interface TypographyProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  content?: string;
  children?: React.ReactNode;
  className?: string;
}
const Typography: React.FC<TypographyProps> = ({ type = 'h2', children, content, className }) => {
  const Element = type;

  return content ? (
    <Element className={clsx('duration-300 ease-in-out', className)} dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    <Element className={clsx('duration-300 ease-in-out', className)}>{children}</Element>
  );
};

export default Typography;
