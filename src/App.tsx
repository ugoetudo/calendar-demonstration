// @ts-ignore CSS side-effect imports are handled by Parcel.
import './App.css';
import {useState} from 'react';

const daymap: { [key: number]: string } = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
  6: "SAT"
};

const monthNames: { [key: number]: string } = {
  0: "January", 1: "February", 2: "March", 3: "April",
  4: "May", 5: "June", 6: "July", 7: "August",
  8: "September", 9: "October", 10: "November", 11: "December"
};

function buildMonthlyCalendar(year: number, month: number): Date[][]{
  const weeks: Date[][] = [];
  let currentDay: number = 0;
  for (let i = 0; i <= 4; i++) {
    let newWeek = new Array(7);
    for (let j = 0; j < 7; j++) {
      var calDay = new Date(year, month, currentDay+1);
      if (calDay.getMonth() != month) {
        break;
      }
      newWeek[j] = calDay
      currentDay++;
    }
    weeks.push(newWeek)
  }  
  return weeks;
}

export function CalDay({ completeDate }: { completeDate: Date }) {
  return (
    <div className="flex flex-col gap-5 w-50 p-1">
      <div className="grid grid-cols-2 gap-5">
        <div>{daymap[completeDate.getDay()]}</div>
        <div>{completeDate.getDate()}</div>
      </div>
      <div><p>Nothing to do today</p></div>
    </div>
  )
}

export function App() {
  const [month, setMonth] = useState(new Date(Date.now()).getMonth())
  const [year, setYear] = useState(new Date(Date.now()).getFullYear())
  const today = new Date(Date.now())
  const monthlyCalendar = buildMonthlyCalendar(today.getFullYear(), today.getMonth())
  const weekList = monthlyCalendar.map((week, ix, arr) => 
      <tr key={ix}>
        {week.map(day => 
          <td className=" border-2 border-black" key={day.toDateString()}>
            <CalDay completeDate={day} />
          </td>
        )}
      </tr>
    )
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div className="flex flex-row gap-5 p-2">
        <button className="bg-blue-500 text-white p-2 rounded">Previous</button>
        <div>
          <p className="text-3xl">{monthNames[month]} </p>
        </div>
        <div><p className="text-3xl">{year} </p></div>
        <button className="bg-blue-500 text-white p-2 rounded">Next</button>
      </div>
      <div className="pl-2">
        <table>
          <tbody>
            {weekList}
          </tbody>
        </table>
      </div>
    </div>
  );
}
