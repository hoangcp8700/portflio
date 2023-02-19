import React, { useMemo } from 'react';
import Button from '@components/atoms/Button';
import ArrowRight from '@assets/icons/ic_arrow_right_fill.svg?r';
import ArrowLeft from '@assets/icons/ic_arrow_left_fill.svg?r';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

export enum DIRECTION {
  LEFT = 'left',
  RIGHT = 'right',
}
interface RedirectToPageProps {
  direction: DIRECTION;
  url: string;
}

const RedirectToPage: React.FC<RedirectToPageProps> = ({ direction, url }) => {
  const navigate = useNavigate();

  const arrowComponent = useMemo(() => {
    switch (direction) {
      case DIRECTION.LEFT:
        return {
          className: 'left-5',
          component: <ArrowLeft className='svg-white text-5xl' />,
        };
      case DIRECTION.RIGHT:
        return {
          className: 'right-5',
          component: <ArrowRight className='svg-white text-5xl' />,
        };
      default:
        return null;
    }
  }, [direction]);

  if (!arrowComponent) return null;

  return (
    <div className={clsx('fixed bottom-5 z-1', arrowComponent.className)}>
      <Button className='!px-0' onClick={() => navigate(url)}>
        {arrowComponent.component}
      </Button>
    </div>
  );
};

export default RedirectToPage;
