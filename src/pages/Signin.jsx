import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";

function Signin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        if (password.length === 0) {
            alert("Password cannot be empty!");
            return;
        }
        navigate('/reporting');
    }

    return (
        <div className="flex h-screen w-full items-center justify-center">
            <div className="max-w-md w-full mx-auto">
                <div className="border border-gray-300 p-6 rounded-lg shadow-md">
                    <form method="post">
                        <div className="mb-4 relative">
                            <label htmlFor="username" className="block text-gray-700">Username:</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="mt-1 p-2 pl-10 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                    placeholder="Username"
                                />
                                <IoPersonCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="Password"
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={handleClick}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signin;
