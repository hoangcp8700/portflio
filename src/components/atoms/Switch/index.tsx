import { useDarkMode } from '@context/DarkModeContext';
import React, { useId } from 'react';
import './index.scss';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Switch: React.FC<SwitchProps> = (props) => {
  const id = useId();
  const { isDarkMode, handleToggle } = useDarkMode();

  return (
    <label className='switch' htmlFor={id}>
      <input
        type='checkbox'
        id={id}
        className='switch-input'
        checked={isDarkMode}
        onChange={handleToggle}
        placeholder='switch'
        {...props}
      />
      <span className='slider' />
    </label>
  );
};
export default Switch;
