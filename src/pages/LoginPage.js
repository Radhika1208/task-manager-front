import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" className="border p-2 w-full mb-4" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="border p-2 w-full mb-4" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="bg-blue-600 text-white p-2 w-full">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
