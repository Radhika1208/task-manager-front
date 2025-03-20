import { useEffect, useState } from "react";
import axios from "axios";
import Header from '../components/Header'; // ✅ Correct
import Footer from '../components/Footer'; // ✅ Correct
 

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-bold text-center">Task List</h2>
        <ul className="mt-6">
          {tasks.map((task) => (
            <li key={task._id} className="border p-4 my-2">{task.name}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
