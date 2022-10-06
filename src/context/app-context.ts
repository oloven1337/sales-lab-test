import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { Pipeline } from '../components/Header';
import { Dates } from '../constans/date';

export interface AppContext {
  pipeline: Pipeline;
  dates: Dates;
  setPipeline: Dispatch<SetStateAction<Pipeline>>;
  setDates: Dispatch<SetStateAction<Dates>>;
}

export const AppContext = createContext<AppContext>({
  pipeline: {
    value: 'marketing',
    label: 'Marketing'
  },
  dates: Dates.Month,
  setDates: () => {},
  setPipeline: () => {},
});

export const useAppStore = () => {
  return useContext(AppContext);
};
