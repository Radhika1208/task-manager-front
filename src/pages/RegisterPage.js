import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", { username, email, password });
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Username" className="border p-2 w-full mb-4" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="email" placeholder="Email" className="border p-2 w-full mb-4" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="border p-2 w-full mb-4" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="bg-green-600 text-white p-2 w-full">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
