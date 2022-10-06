import { ConstEnumColors } from '../styles/theme';
import { CardTypes } from '../constans/cardTypes';
import { Data } from '../App';
import { Dates } from '../constans/date';

export const data: Data = {
  cards: [
    {
      title: 'Total Leads and Deals',
      value: 1600,
      amount: 132000999,
      color: ConstEnumColors.PURPLE,
      currency: '€',
      date: new Date('10.19.2022'),
      type: CardTypes.FlattenedCross,
      pipeline: 'marketing'
    },
    {
      title: 'Total Leads and Deals',
      date: new Date('09.10.2022'),
      value: 1600,
      amount: 132000999,
      color: ConstEnumColors.GREEN,
      currency: '€',
      type: CardTypes.Daw,
      pipeline: 'sales'
    },
    {
      title: 'Total Leads and Deals',
      value: 1600,
      amount: 132000999,
      color: ConstEnumColors.RED,
      currency: '€',
      type: CardTypes.CROSS,
      date: new Date('10.05.2022'),
      pipeline: 'marketing'
    },
    {
      title: 'Total Leads and Deals',
      value: 1600,
      amount: 132000999,
      color: ConstEnumColors.BLUE,
      currency: '€',
      type: CardTypes.User,
      date: new Date('03.10.2022'),
      pipeline: 'sales'
    },
    {
      title: 'Total Leads and Deals',
      value: 1600,
      amount: 132000999,
      color: ConstEnumColors.PURPLE,
      currency: '€',
      type: CardTypes.WrittenFile,
      date: new Date('09.01.2022'),
      pipeline: 'partners'
    },
    {
      title: 'Total Leads and Deals',
      value: 1600,
      amount: 132000999,
      color: ConstEnumColors.GREEN,
      currency: '€',
      type: CardTypes.FileDaw,
      date: new Date('10.05.2022'),
      pipeline: 'marketing'
    },
    {
      title: 'Total Leads and Deals',
      value: 1600,
      amount: 132000999,
      color: ConstEnumColors.RED,
      currency: '€',
      type: CardTypes.FileCross,
      date: new Date('09.01.2022'),
      pipeline: 'partners'
    },
    {
      title: 'Total Leads and Deals',
      value: 1600,
      amount: 132000999,
      color: ConstEnumColors.BLUE,
      currency: '€',
      type: CardTypes.File,
      date: new Date('09.01.2022'),
      pipeline: 'partners'
    },
  ],
  periods: [
    {
      id: 0,
      title: Dates.Month
    },
    {
      id: 1,
      title: Dates.Week
    },
    {
      id: 2,
      title: Dates.Yesterday
    },
    {
      id: 3,
      title: Dates.Today
    }
  ],
  pipeline: [
    {
      value: 'allPipelines',
      label: 'All Pipelines',
    },
    {
      value: 'sales',
      label: 'Sales',
    },
    {
      value: 'partners',
      label: 'Partners',
    },
    {
      value: 'marketing',
      label: 'Marketing',
    },
  ]
}
