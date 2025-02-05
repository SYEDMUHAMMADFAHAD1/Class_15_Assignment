import Link from "next/link";
import { User } from "lucide-react";

const DynamicUser = async (props: any) => {
  console.log(props);

  const url = await fetch(
    `https://jsonplaceholder.typicode.com/users/${props.params.userdata}`
  );
  const response = await url.json();
  console.log("Single User", response);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 px-4">
      <div className="bg-gray-900 shadow-2xl p-8 sm:p-12 md:p-16 rounded-3xl max-w-lg w-full border border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
          Profile Info
        </h1>

        <div className="space-y-4 text-lg sm:text-xl font-serif font-medium text-gray-300">
          <p><span className="font-bold text-purple-400">Id:</span> {response.id}</p>
          <p><span className="font-bold text-purple-400">Name:</span> {response.name}</p>
          <p><span className="font-bold text-purple-400">Username:</span> {response.username}</p>
          <p><span className="font-bold text-purple-400">Email:</span> {response.email}</p>
          <p>
            <span className="font-bold text-purple-400">Address:</span> 
            {response.address.street}, {response.address.suite}, 
            {response.address.city}, {response.address.zipcode}
          </p>
          <p><span className="font-bold text-purple-400">Phone #:</span> {response.phone}</p>
          <p><span className="font-bold text-purple-400">Website:</span> {response.website}</p>
          <p>
            <span className="font-bold text-purple-400">Company:</span> 
            {response.company.name}, {response.company.bs}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DynamicUser;