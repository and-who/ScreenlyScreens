import { Background } from "./components/background/background";
import { Confetti } from "./components/confetti/confetti";
import { Employee, EmployeeCard } from "./components/employee-card/employee-card";
import { FallingElements } from "./components/falling-elements/falling-elements";
import { Title } from "./components/title/title";
import { WinningElement } from "./components/winning-element/winning-element";
import { employees } from "./data/employees";
import seedrandom from 'seedrandom';
import { Feedback } from "./components/feedback/feedback";



export const App = () => {
    // Returns the ISO week of the date.
  const getWeek = function() {
    var date = new Date();
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                          - 3 + (week1.getDay() + 6) % 7) / 7);
  }

  // Returns the four-digit year corresponding to the ISO week of the date.
  const getWeekYear = function() {
    var date = new Date();
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    return date.getFullYear();
  }

  const rng = seedrandom(getWeekYear()*100+getWeek());
  const employeeOfTheWeek = employees[Math.floor(rng() * employees.length)];

  return (
    <div>
      {/* <Background/> */}
      <Confetti confettiCharacters={employeeOfTheWeek.confetti}/>
      <WinningElement element={<EmployeeCard {...employeeOfTheWeek}/>}/>
      <Feedback seed={rng()} employee={employeeOfTheWeek}/>
      <FallingElements elements={[...employees].map((employee, index) => <EmployeeCard key={index} {...employee}/>)} seed={rng()}/>
      <Title>Employee of the Week:</Title>
    </div>
  );
}