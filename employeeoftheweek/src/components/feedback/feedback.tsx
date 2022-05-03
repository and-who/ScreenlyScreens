import './feedback.scss';
import seedrandom from 'seedrandom';
import { skills } from '../../data/skills';
import { Employee } from '../employee-card/employee-card';

const personImages = [
  new URL('../../assets/images/feedback/ariel.png?as=webp&width=500',
    import.meta.url
  ),
  new URL('../../assets/images/feedback/bean.png?as=webp&width=500',
    import.meta.url
  ),
  new URL('../../assets/images/feedback/elmo.png?as=webp&width=500',
    import.meta.url
  ),
  new URL('../../assets/images/feedback/gandih.png?as=webp&width=500',
    import.meta.url
  ),
  new URL('../../assets/images/feedback/hulk.png?as=webp&width=500',
    import.meta.url
  ),
  new URL('../../assets/images/feedback/marilyn.png?as=webp&width=500',
    import.meta.url
  ),
  new URL('../../assets/images/feedback/nibbler.png?as=webp&width=500',
    import.meta.url
  ),
  new URL('../../assets/images/feedback/obama.png?as=webp&width=500',
    import.meta.url
  ),
  new URL('../../assets/images/feedback/penguin.png?as=webp&width=500',
    import.meta.url
  ),
  new URL('../../assets/images/feedback/pitt.png?as=webp&width=500',
    import.meta.url
  ),
  new URL('../../assets/images/feedback/spongebob.png?as=webp&width=500',
    import.meta.url
  ),
  new URL('../../assets/images/feedback/un.png?as=webp&width=500',
    import.meta.url
  ),
  new URL('../../assets/images/feedback/zucker.png?as=webp&width=500',
    import.meta.url
  ),
]

const article = {
  'male': 'his',
  'female': 'her',
  'other': 'its'
}

const article2 = {
  'male': 'him',
  'female': 'her',
  'other': 'it'
}

export const Feedback = (props: {  seed: number; employee:Employee}) => {
const {seed, employee} = props;
const rng = seedrandom(seed);
const personImage = personImages[Math.floor(rng() * personImages.length)];
const skill = skills[Math.floor(rng() * skills.length)].replace('$1', article[employee.gender]).replace('$2', article2[employee.gender]);

  return <div className="feedback">
    <div className="feedback__bubble">
      <h1 className="feedback__text">"{skill}"</h1>
    </div>
    
    <img className='feedback__image' src={personImage}/>
  </div>;
}