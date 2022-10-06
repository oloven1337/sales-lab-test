import styled from "styled-components";

export interface PeriodItemProps {
  active?: boolean;
}

export const Wrapper = styled('div')`
  display: flex;
  justify-content: right;
`

export const PeriodItem = styled('div')<PeriodItemProps>`
  margin-left: 40px;
  color: ${({ active }) => active ? '#3D8FEC' : '#AAB7D4'};
  cursor: ${({ active }) => active ? 'default' : 'pointer'};
  
  &:hover {
    color: #7B8AAB;
    transition: .5s;
  }
`
