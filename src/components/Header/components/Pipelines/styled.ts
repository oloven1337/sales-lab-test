import styled from "styled-components";

export interface PeriodItemProps {
  active?: boolean;
}


export const Select = styled('select')`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background-image: none;
  flex: 1;
  padding: 0 .5em;
  cursor: pointer;
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  color: black;
  
  &::-ms-expand {
    display: none;
  }
`

export const SelectWrapper = styled('div')`
  position: relative;
  display: flex;
  height: 20px;
  overflow: hidden;
  border-radius: .25em;

  &::after {
    content: '\\25BC';
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    pointer-events: none;
    transition: .25s all ease;
  }
  
  &:hover::after {
    color: #23b499;
  }
`
