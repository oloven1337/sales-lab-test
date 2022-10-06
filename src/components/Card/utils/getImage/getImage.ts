import {CardTypes} from '../../../../constans/cardTypes';
import {Cross, Daw, FileCross, FileDaw, FlattenedCross, User, WrittenFile, File} from '../../../../icons';

export const getImage = (type: CardTypes): () => JSX.Element => {
  switch (type) {
    case CardTypes.CROSS: {
      return Cross;
    }
    case CardTypes.Daw: {
      return Daw;
    }
    case CardTypes.File: {
      return File;
    }
    case CardTypes.FileCross: {
      return FileCross;
    }
    case CardTypes.FileDaw: {
      return FileDaw;
    }
    case CardTypes.FlattenedCross: {
      return FlattenedCross;
    }
    case CardTypes.User: {
      return User;
    }
    case CardTypes.WrittenFile: {
      return WrittenFile;
    }
  }
}
