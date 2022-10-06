import { Dates } from '../../../../constans/date';

export interface PeriodProps {
  periods: Period[];
}

export interface Period {
  id: number;
  title: Dates;
}
