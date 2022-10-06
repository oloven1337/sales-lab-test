import React, { FC } from 'react';
import Select, { StylesConfig } from 'react-select';

import { Pipeline, PipelinesProps } from './types';
import { useAppStore } from "../../../../context";

export const Pipelines: FC<PipelinesProps> = ({ pipeline }) => {
  const { pipeline: pipelineStore, setPipeline } = useAppStore();

  const dropdownIndicatorStyles = (base: any) => {
    return Object.assign(base, {
      color: '#AAB7D4',
    });
  };

  const customStyle: StylesConfig<Pipeline, false> = {
    option: (styles, { isFocused, isSelected }) => {

      if (isSelected) {
        return styles
      }

      if (isFocused) {
        return { ...styles, backgroundColor: '#D4DBE9', cursor: 'pointer', color: '#555555' }
      }

      return styles
    },
    control: (styles) => ({
      ...styles, borderColor: 'white', '&:hover': {
        borderColor: 'white',
        cursor: 'pointer'
      }
    }),
    dropdownIndicator: dropdownIndicatorStyles
  }

  return (
    <Select
      onChange={(selectPipeline) => {
        console.log(selectPipeline)
        setPipeline(selectPipeline!);
      }}
      styles={customStyle}
      isSearchable={false}
      defaultValue={pipelineStore}
      options={pipeline}
    />
  );
};
