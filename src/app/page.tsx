import Link from "next/link";
import { User } from "lucide-react";

export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await url.json();
  console.log(response);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 px-4 py-10">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-white mb-8 text-center">
        <span className=" bg-clip-text text-blue-400 shadow-md">
          FETCHING API FAKE USER DATA
        </span>
      </h1>

      {/* Grid layout for users */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-6xl px-4">
        {/* Mapping through the user details */}
        {response.map((userdata: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-3xl shadow-2xl hover:shadow-neon-purple transition-all transform hover:scale-105 border border-gray-700"
          >
            {/* User Icon */}
            <div className="w-20 h-20 flex items-center justify-center mb-6 bg-gray-700 rounded-full border-4 border-purple-500 shadow-lg">
              <User size={50} className="text-white" />
            </div>

            {/* User Name */}
            <Link
              href={`/${userdata.id}`}
              className="text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-2 rounded-full transition-all hover:from-purple-700 hover:to-blue-600 hover:shadow-lg"
            >
              {userdata.name}
            </Link>

            {/* Additional User Info */}
            <div className="mt-4 text-center">
              <p className="text-gray-300 text-sm">{userdata.email}</p>
              <p className="text-gray-400 text-xs">{userdata.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
