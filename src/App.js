import { useState } from 'react';
import Header from  './components/Header'
import Tasks from './components/Tasks'
import './index.css'

function App() {

  const [tasks, setTasks] = useState(
    [
      {
        "text": "Сходить на секонд хенд",
        "day": "Jan 29, 2023",
        "reminder": true,
        "id": 5
      },
      {
        "text": "Купить Игорю трусы и футболки",
        "day": "Oct 12, 2022",
        "reminder": false,
        "id": 6
      },
      {
        "text": "Купить даше сумку с гарри поттером розовую",
        "day": "Mar 25, 2023",
        "reminder": false,
        "id": 7
      },
      {
        "text": "Купить колоду затмение амири",
        "day": "Oct 20, 2016",
        "reminder": false,
        "id": 8
      },
      {
        "text": "Больше звезд которие падают",
        "day": "Sep 26, 2013",
        "reminder": false,
        "id": 9
      },
      {
        "text": "Метеорити которие падают",
        "day": "Dec 28, 2017",
        "reminder": false,
        "id": 10
      }
    ])

  return (
    <div className='main-wrapper'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
