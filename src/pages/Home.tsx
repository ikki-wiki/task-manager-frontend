import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getHello } from "@/api/test";

export function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchMessage() {
      try {
        const response = await getHello();
        setMessage(response);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    }

    fetchMessage();
  }, []);

  return (
    <div>
      <h1>Welcome to Task Manager</h1>
      <p>Organize your tasks efficiently and boost your productivity.</p>
      <p className="mt-2 text-primary">{message}</p>
      <Link to="/tasks">
        <div className="mt-4">
          <Button>View Tasks</Button>
        </div>
      </Link>
    </div>
  );
}

export default Home;
