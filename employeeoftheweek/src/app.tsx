import { EmployeeCard, EmployeeCardProps } from "./components/employee-card";

const employees: EmployeeCardProps[] = [
  {id: "1", name: "Julia", image: new URL(
    './assets/images/julia.png?as=webp&width=250',
    import.meta.url
  )}
];

export const App = () => {
  return (
    <div>
      <h1>Employee of the Week</h1>
      <EmployeeCard {...employees[0]}/>
    </div>
  );
}