import React, { useState } from 'react';

import { CardType } from './components/Card';
import { Pipeline, PeriodType } from './components/Header';
import { Header, Card } from './components';
import { data } from './mocks/mock';
import { AppContext } from './context/app-context';
import { Dates } from './constans/date';

export interface Data {
  cards: CardType[];
  periods: PeriodType[];
  pipeline: Pipeline[];
}

export const App = () => {
  const { pipeline: pipelineData, periods, cards } = data;
  const [dates, setDates] = useState<Dates>(Dates.Month);
  const [pipeline, setPipeline] = useState<Pipeline>({ value: 'marketing', label: 'Marketing' });

  // при реальном кейсе необходимо добавить обработку ошибок и добавить лоадер на data

  return (
    <AppContext.Provider value={{ dates, setDates, pipeline, setPipeline }}>
      <Header pipeline={pipelineData} periods={periods}/>
      <Card cards={cards}/>
    </AppContext.Provider>
  );
}
