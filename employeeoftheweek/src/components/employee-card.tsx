export interface EmployeeCardProps {
  id: string;
  name: string;
  image: string|URL;
}

export const EmployeeCard = (props: EmployeeCardProps) => {
  const {name, image} = props;
  return <div>
    <h2>{name}</h2>
    <img src={image}/>
  </div>;
}