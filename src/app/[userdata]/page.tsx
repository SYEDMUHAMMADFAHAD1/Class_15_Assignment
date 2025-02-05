const DynamicUser = async (props: any) => {
  console.log(props);

  const url = await fetch(
    `https://jsonplaceholder.typicode.com/users/${props.params.userdata}`
  );
  const response = await url.json();
  console.log("Single User", response);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-4">
      <div className="bg-white shadow-2xl p-8 sm:p-12 md:p-16 rounded-3xl max-w-lg w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-red-950 hover:text-green-900 text-center mb-6">
          User Details
        </h1>

        <div className="space-y-4 text-lg sm:text-xl font-serif font-medium text-gray-800">
          <p><span className="font-bold">Id:</span> {response.id}</p>
          <p><span className="font-bold">Name:</span> {response.name}</p>
          <p><span className="font-bold">Username:</span> {response.username}</p>
          <p><span className="font-bold">Email:</span> {response.email}</p>
          <p>
            <span className="font-bold">Address:</span> 
            {response.address.street}, {response.address.suite}, 
            {response.address.city}, {response.address.zipcode}
          </p>
          <p><span className="font-bold">Phone #:</span> {response.phone}</p>
          <p><span className="font-bold">Website:</span> {response.website}</p>
          <p>
            <span className="font-bold">Company:</span> 
            {response.company.name}, {response.company.bs}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DynamicUser;
