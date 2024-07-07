import { useEffect, useState } from "react";

function Github() {
  
  const [data, setData] = useState({});
  const [userName, setUserName] = useState("");   
  const [submittedUserName, setSubmittedUserName] = useState("");

  useEffect(() => {
    if (submittedUserName) {
      fetch(`https://api.github.com/users/${submittedUserName}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setData(data);
        });
    }
  }, [submittedUserName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUserName(userName);
    
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-gray-800 text-white text-3xl p-4 text-center mb-8">
        Github Followers: {data.followers}
      </div>

      {data.avatar_url && (
        <div className="mt-4 mb-8"> {/* Changed mt-8 to mt-4 and added mb-8 */}
          <img 
            src={data.avatar_url} 
            alt="Git Profile" 
            className="rounded-full h-40 w-40 object-cover"
          />
        </div>
      )}

      <div className="flex items-center justify-center mb-8"> {/* Changed mb-12 to mb-8 */}
        <input 
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border border-gray-300 rounded-l py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter GitHub username"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </div>

    </div>
  );
}

export default Github;
