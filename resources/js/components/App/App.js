import {useState} from 'react';
import Header from "../Header/Header";
import Tasks from "../Tasks/Tasks";
import AddTask from "../forms/AddTask/AddTask";

const App = () => {
  const tasksData = [
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 4:30pm',
      reminder: false,
    },
  ];

  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState(tasksData);

  // Add task
  const addTask = (task) => {
    let id;
    if (tasks.length > 0) {
      id = tasks[tasks.length - 1].id + 1;
    } else {
      id = 1;
    }
    const newTask = {id, ...task};

    setTasks([...tasks, newTask]);
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id;
    }));
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => {
      return task.id === id ? {...task, reminder: !task.reminder} : task;
    }));
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} isShowingForm={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  )
}

export default App;