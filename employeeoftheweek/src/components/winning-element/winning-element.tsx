import './winning-element.scss';
import seedrandom from 'seedrandom';
import { ReactNode } from 'react';

export interface WinningElementsProps {
  seed?: number;
  element: ReactNode;
}

export const WinningElement = (props: WinningElementsProps) => {
  const {element, seed} = props;

  const rng = seedrandom(seed);
  
  return <div className="winning-element">
  <div className="winning-element__wrapper">
    {element}
  </div>
  </div>;
}