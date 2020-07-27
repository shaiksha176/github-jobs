import React from "react";
import Job from "./Job";
import ReactMarkdown from "react-markdown";

const JobsList = ({ data, isloading, sum, err }) => {
  console.log(isloading);
  console.log(data);
  const {
    company,
    company_logo,
    created_at,
    description,
    how_to_apply,
    id,
    location,
    title,
    type,
    url,
  } = data;
  const head = "<h2>hello</h2>";
  return isloading ? (
    <h1>Loading</h1>
  ) : (
    data.map((job) => (
      <div>
        <h2>{job.title}</h2>
        <p>company : {job.company}</p>
        <p>company url : {job.company_url}</p>
        <p>Location : {job.location}</p>
        <p>
          <b>job type</b>:{job.type}
        </p>
        <ReactMarkdown source={job.how_to_apply} escapeHtml={false} />
      </div>
    ))
  );

  //console.log(jobs);
  //   return (
  //     <>
  //       <Job />
  //     </h1>
  //   );
};

export default JobsList;
