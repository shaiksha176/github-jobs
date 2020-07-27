import React, { useState } from "react";

const Inbox = ({ jobsearch, joblocation, fetchJobs }) => {
  const [job, setJob] = useState("");
  const [loc, setLoc] = useState("");
  const handleClick = () => {
    jobsearch(job);
    joblocation(loc);
    fetchJobs(job, loc);
    setJob("");
    setLoc("");
  };
  return (
    //ONE METHOD TO SEND DATA FROM CHILD TO PARENT
    // <div>
    //   <input
    //     type="text"
    //     placeholder="Enter a job to search"
    //     onChange={(e) => jobsearch(e.target.value)}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Location"
    //     onChange={(e) => joblocation(e.target.value)}
    //   />
    //   <button>Search</button>
    // </div>

    //ANOTHER METHOD TO SEND DATA
    <div>
      <input
        type="text"
        placeholder="Enter a job to search"
        onChange={(e) => setJob(e.target.value)}
        value={job}
      />
      <input
        type="text"
        placeholder="Location"
        onChange={(e) => setLoc(e.target.value)}
        value={loc}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default Inbox;
