import React, {FC} from 'react';
import {CardTypes} from '../../../../constans/cardTypes';
import {Cross, Daw, File, FileCross, FileDaw, FlattenedCross, User, WrittenFile} from '../../../../icons';
import {ImageProps} from './types';

export const Image: FC<ImageProps> = ({type}) => {
  switch (type) {
    case CardTypes.CROSS: {
      return <Cross/>;
    }
    case CardTypes.Daw: {
      return <Daw/>;
    }
    case CardTypes.File: {
      return <File/>;
    }
    case CardTypes.FileCross: {
      return <FileCross/>;
    }
    case CardTypes.FileDaw: {
      return <FileDaw/>;
    }
    case CardTypes.FlattenedCross: {
      return <FlattenedCross/>;
    }
    case CardTypes.User: {
      return <User/>;
    }
    case CardTypes.WrittenFile: {
      return <WrittenFile/>;
    }
  }
}
