import styled from 'styled-components';
import { ConstEnumColors } from '../../styles/theme';

interface ValueWrapperProps {
  color: ConstEnumColors;
}

interface IconWrapperProps {
  background: ConstEnumColors;
}

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: fit-content;
  background: #FFFFFF;
  box-shadow: 0 0 2px #EEF4FE, 0 1px 2px #D0DAEB;
  border-radius: 8px;
  margin-top: 14px;
  
  &:hover {
    scale: 1.03;
    transition: .3s;
  }
`

export const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Content = styled('div')`
  margin-left: 16px;
`

export const Title = styled('div')<ValueWrapperProps>`
  color: ${({ color }) => color};
  font-weight: 700;
  font-size: 18px;
`

export const ValueWrapper = styled('div')`
  display: flex;
  line-height: 27px;
`

export const Value = styled('div')`
  font-weight: 700;
  font-size: 18px;
`

export const Amount = styled('div')`
  font-weight: 400;
  font-size: 18px;
`

export const Stick = styled('div')`
  font-weight: 400;
  border: 1px solid #373737;
  background: #373737;
  margin: 0 8px;
  border-radius: 2px;
`

export const IconWrapper = styled('div')<IconWrapperProps>`
  width: 58px;
  height: 58px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: ${({ background }) => background};
  border: 1px solid rgba(0, 0, 0, 0.15);
`
