import React, { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Inbox";
import Reactmarkdown from "react-markdown";
import axios from "axios";
import JobsList from "./components/JobsList";
function App() {
  const [jobs, setJobs] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [err, setErr] = useState("");
  const [jobsearch, setJobSearch] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const proxy = `https://cors-anywhere.herokuapp.com/`;

  const BASEURL = `${proxy}https://jobs.github.com/positions.json`;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const params = {
          description: "node js",
          location: "new york",
        };
        const result = await axios.get(BASEURL, { params });
        const data = await result.data;

        setJobs(data);
        setIsloading(false);
      } catch (error) {
        setErr("Internal server error");
      }

      //  console.log(data);
      // axios.get(BASEURL, { params }).then((res) => console.log(res.data));
    };
    fetchJobs();
  }, []);

  const fetchJobs = async (job = "node js", loc = "london") => {
    try {
      const params = {
        description: job,
        location: loc,
      };
      const result = await axios.get(BASEURL, { params });
      const data = await result.data;

      setJobs(data);
      setIsloading(false);
    } catch (error) {
      setErr("Internal server error");
    }
  };

  const joblocationFunc = (loc) => {
    setJobLocation(loc);
    console.log(loc);
  };
  const jobsearchFunc = (job) => {
    setJobSearch(job);
    console.log(job);
  };

  return (
    <>
      <Input
        jobsearch={jobsearchFunc}
        joblocation={joblocationFunc}
        fetchJobs={fetchJobs}
      />

      <JobsList data={jobs} isloading={isloading} err={err} />
    </>
  );
}

export default App;
