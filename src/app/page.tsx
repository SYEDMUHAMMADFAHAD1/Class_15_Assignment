import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await url.json();
  console.log(response);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-4 py-10">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg bg-gradient-to-r from-yellow-300 via-orange-400 to-red-600 px-6 py-3 rounded-xl shadow-md transition transform hover:scale-105">
        USERS
      </h1>

      {/* Grid layout for users */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mt-8">
        {/* Mapping through the user details */}
        {response.map((userdata: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 p-6 rounded-3xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl w-80"
          >
            {/* User Image */}
            <Image
              src="/images/user.jpg"
              alt="user"
              width={200}
              height={200}
              className="rounded-full mb-4 border-4 border-white shadow-md"
            />

            {/* User Name */}
            <Link
              href={`/${userdata.id}`}
              className="text-lg font-extrabold text-white bg-black w-full text-center py-2 rounded-full transition hover:bg-gray-700 hover:shadow-md"
            >
              {userdata.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
