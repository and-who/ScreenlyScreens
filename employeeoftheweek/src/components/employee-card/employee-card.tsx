import './employee-card.scss';
import seedrandom from 'seedrandom';

export interface Employee {
  name: string;
  image: string|URL;
  confetti?: string[];
  gender: 'male'|'female'|'other';
}

const fontFamilys = [
  'Amatic SC',
  'Babylonica',
  'Dawning of a New Day',
  'Grape Nuts',
  'Nothing You Could Do',
  'Reenie Beanie',
  'Square Peg',
];

export const EmployeeCard = (props: Employee) => {
  const {name, image} = props;

  const rng = seedrandom(name);
  const turn = (rng() * 30) - 10;
  
  return <div className="employee-card">
    <img className='employee-card__image' src={image}/>
    <div className="employee-card__name-container">
      <h2 style={{fontFamily: fontFamilys[Math.floor(rng()*fontFamilys.length)], transform: `rotate(${turn}deg)`}} className='employee-card__name'>{name}</h2>
    </div>
  </div>;
}