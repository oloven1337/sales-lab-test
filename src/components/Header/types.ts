import { Period } from './components/Period/types';
import { Pipeline } from './components/Pipelines/types';

export interface HeaderProps {
  periods: Period[];
  pipeline: Pipeline[];
}
