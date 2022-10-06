import { Dates } from './constans/date';
import { Card } from './components/Card/types';

export const filterDates = ( cards: Card[], dates: Dates) => {
  const today = new Date();

  switch (dates) {
    case Dates.Month:
      return cards.filter( card => card.date.getMonth() === today.getMonth())
    case Dates.Today:
      return cards.filter( card => card.date.getDay() === today.getDay())
    default:
      return cards;
  }
}
