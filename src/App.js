import JobBoard from "./components/JobBoard";
import data from "./assets/data.json";
import React, { useEffect, useState } from "react";

function App() {
  const [jobs, setjobs] = useState([]);
  const [filter, setFilter] = useState([]);
  console.log(filter);
  useEffect(() => setjobs(data), []);

  const filterTags = ({ role, level, languages, tools }) => {
    if (filter.length === 0) {
      return true;
    }
    const tags = [role, level];
    console.log(tags);
    if (languages) {
      tags.push(...languages);
    }
    if (tools) {
      tags.push(...tools);
    }
    return tags.some((tag) => filter.includes(tag));
  };

  const handleClick = (tag) => {
    if (filter.includes(tag)) return;
    setFilter([...filter, tag]);
  };

  const handleDelete = (passedFilter) => {
    setFilter(filter.filter((f) => f !== passedFilter));
  };
  const filtredJobs = jobs.filter(filterTags);
  console.log(filtredJobs);
  return (
    <div className="bg-blue-100 w-full">
      <header className="bg-teal-700 mb-16">
        <img src="/images/bg-header-desktop.svg" alt=""></img>
      </header>

      {filter.length > 0 && (
        <div className="flex bg-white shadow-md my-16 mx-10 p-6 rounded ">
          {filter.map((f) => (
            <span className="mr-4 mb-4 p-2 sm:mb-0" >
              <span className="text-teal-500 rounded-l-lg bg-blue-100 font-bold p-2 ">
                {f}
              </span>
              <span onClick={() => handleDelete(f)} className="text-white rounded-r-lg bg-teal-700 px-3 cursor-pointer p-2" >X</span>
            </span>
          ))}
        </div>
      )}

      <div>
        {jobs.length === 0 ? (
          <p>jobs are fetching...</p>
        ) : (
          filtredJobs.map((job) => (
            <JobBoard job={job} key={job.id} handleClick={handleClick} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
