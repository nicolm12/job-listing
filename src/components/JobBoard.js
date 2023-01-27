import React from "react";

const JobBoard = ({ job, handleClick }) => {
  const tags = [job.role, job.level];

  if (job.languages) {
    tags.push(...job.languages);
  }
  if (job.tools) {
    tags.push(...job.tools);
  }

  return (
    <div
      className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${
        job.featured && " border-l-4 border-teal-700 border-solid"
      } sm:flex-row sm:my-8`}
    >
      <div>
        <img
          className="-mt-16 w-20 h-20 mb-6 sm:h-24 sm:w-24 sm:my-0"
          src={job.logo}
          alt={job.company}
        />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h4 className="font-bold text-teal-500">
          {" "}
          {job.company}
          {job.isNew && (
            <span className="text-white bg-teal-700 font-bold m-2 py-1 px-2 rounded-3xl">
              NEW!
            </span>
          )}
          {job.featured && (
            <span className="text-white bg-gray-900 font-bold py-1 px-2 rounded-3xl">
              FEATURED
            </span>
          )}
        </h4>
        <h2 className="font-bold text-xl my-2 sm:my-0">{job.position}</h2>
        <p className="text-gray-400">
          {job.postedAt} • {job.contract} • {job.location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-none sm:pt-0 sm:mt-0 ">
        {tags
          ? tags.map((t) => (
              <span  onClick={()=> handleClick(t)} className="cursor-pointer text-teal-500 bg-blue-100 font-bold mr-4 mb-4 p-2 rounded sm:mb-0"
             >
                {t}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};
export default JobBoard;
