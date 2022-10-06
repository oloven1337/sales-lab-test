import { ConstEnumColors } from '../../styles/theme';
import { CardTypes } from '../../constans/cardTypes';

export interface CardProps {
  cards: Card[];
}

export interface Card {
  title: string;
  value: number;
  amount?: number;
  currency?: string;
  type: CardTypes;
  color: ConstEnumColors;
  pipeline: string;
  date: Date;
}
