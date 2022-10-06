import React, { FC } from 'react';

import { Period, Pipelines } from './components';
import { HeaderProps } from './types';

export const Header: FC<HeaderProps> = ({ periods, pipeline }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Pipelines pipeline={pipeline} />
    <Period periods={periods} />
  </div>
);
