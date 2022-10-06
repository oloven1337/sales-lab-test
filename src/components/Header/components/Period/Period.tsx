import React, { FC, useCallback, useState } from 'react';

import { useAppStore } from '../../../../context';
import { Period as PeriodType, PeriodProps } from './types';
import { Wrapper, PeriodItem } from './styled';

export const Period: FC<PeriodProps> = ({ periods }) => {
  const [activePeriod, setActivePeriod] = useState<PeriodType | null>(periods[0]);
  const { setDates } = useAppStore();

  const handleClick = useCallback((period: PeriodType) => {
    return () => {
      setActivePeriod(period);
      setDates(period.title)
    }
  }, [setDates, setActivePeriod]);

  return (
    <Wrapper>
      {periods.map(period => (
        <PeriodItem
          key={period.id}
          active={period.title === activePeriod?.title}
          onClick={handleClick(period)}
        >
          {period.title}
        </PeriodItem>
      ))}
    </Wrapper>
  );
};
