import React from 'react';
import { mapModifiers } from '@utils/functions';
import './index.scss';

const CubeAnimation = () => (
  <div className='t-wavingCubes'>
    <div className='t-wavingCubes_wrapper'>
      <div className='t-wavingCubes_perspective'>
        {new Array(96).fill(true).map((_item, idx) => (
          <React.Fragment key={`cube-item-${idx.toString()}`}>
            <div className='t-wavingCubes_translateCubeShadow'>
              <div className={mapModifiers('t-wavingCubes_cubeShadow', idx.toString())} />
            </div>
            <div className={mapModifiers('t-wavingCubes_cube', idx.toString())}>
              <div className='t-wavingCubes_cube-top' />
              <div className='t-wavingCubes_cube-left' />
              <div className='t-wavingCubes_cube-right' />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default React.memo(CubeAnimation);
