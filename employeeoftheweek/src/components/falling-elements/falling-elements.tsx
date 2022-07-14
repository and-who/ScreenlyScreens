import './falling-elements.scss';
import seedrandom from 'seedrandom';
import { ReactNode, useEffect } from 'react';
import React from 'react';

export interface FallingElementsProps {
  seed?: number;
  elements: ReactNode[];
}


export const FallingElements = (props: FallingElementsProps) => {
  const [animationDone, setAnimationDone] = React.useState(false);
  const {elements, seed} = props;
  const baseTime = 12;
  const variableTime = 7;

  useEffect(() => {
    setTimeout(() => {
      setAnimationDone(true);
    }, (baseTime+variableTime)*1000)
  }, []);

  const rng = seedrandom(seed);

  
  return !animationDone && <div className="falling-elements">
    {elements.map((element, index) => <div 
    key={index}
    className="falling-elements__leaf"
    style={{left: `${(rng()*120)-20}%`, top:`-${rng()*800}px`, animationDuration: `${baseTime+(rng()*variableTime)}s`}}
    >
      <div className="falling-elements__leaf-content" style={{transform : `scale(0.6) rotate(${(rng()*16)-8}deg)`}}>{element}</div>
      </div>)}
  </div>;
}