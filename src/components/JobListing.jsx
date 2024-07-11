// import jobs from "../jobs.json";
import Job from "./Job";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
const JobListing = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3': '/api/jobs'
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // const jobsListings = isHome ? jobs.slice(0,3): jobs;

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent" : "Browse"} Jobs
          </h2>
          {loading ? (
            <Spinner loading={loading}/>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <Job job={job} key={job.id} />
                ))}
                {/* <!-- Job Listing 1 --> */}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default JobListing;
