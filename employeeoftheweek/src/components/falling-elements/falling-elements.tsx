import './falling-elements.scss';
import seedrandom from 'seedrandom';
import { ReactNode } from 'react';

export interface FallingElementsProps {
  seed?: number;
  elements: ReactNode[];
}


export const FallingElements = (props: FallingElementsProps) => {
  const {elements, seed} = props;

  const rng = seedrandom(seed);
  
  return <div className="falling-elements">
    {elements.map((element, index) => <div 
    className="falling-elements__leaf"
    style={{left: `${(rng()*120)-20}%`, top:`-${rng()*800}px`, animationDuration: `${4+(rng()*4)}s`}}
    >
      <div className="falling-elements__leaf-content" style={{transform : `scale(0.5) rotate(${(rng()*16)-8}deg)`}}>{element}</div>
      </div>)}
  </div>;
}