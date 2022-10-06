import React, { FC } from 'react';

import { filterDates } from '../../filterDates';
import { useAppStore } from '../../context';
import { Image } from './components/Image';
import { CardProps } from './types';
import {
  Amount,
  Container,
  Content,
  IconWrapper,
  Stick,
  Title,
  Value,
  ValueWrapper,
  Wrapper
} from './styled';

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '');
}

export const Card: FC<CardProps> = ({ cards }) => {
  const { dates, pipeline: { value } } = useAppStore();
  const filteredByPipelines = value === 'allPipelines'
    ? cards
    : cards.filter(card => card.pipeline === value);

  return (
    <Container>
      {filterDates(filteredByPipelines, dates).map(({ title, amount, value, currency, color, type }, idx) => (
        <Wrapper key={`${title}_${idx}`}>
          <IconWrapper background={color}>
            <Image type={type}/>
          </IconWrapper>
          <Content>
            <Title color={color}>{title}</Title>
            <ValueWrapper>
              <Value>{value}</Value>
              {amount && (
                <>
                  <Stick/>
                  <Amount>{`${numberWithCommas(amount)} ${currency || ''}`}</Amount>
                </>
              )}
            </ValueWrapper>
          </Content>
        </Wrapper>
      ))}
    </Container>
  );
}
