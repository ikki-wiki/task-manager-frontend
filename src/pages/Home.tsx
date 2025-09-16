import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Home() {
    return (
        <div>
            <h1>Welcome to Task Manager</h1>
            <p>Organize your tasks efficiently and boost your productivity.</p>
            <Link to="/tasks">
                <div className="mt-4">
                    <Button>View Tasks</Button>
                </div>
            </Link>
        </div>
    );
};

export default Home;