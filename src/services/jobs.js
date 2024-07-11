//Add new job
const addJob = async (newJob) => {
 console.log(newJob);
 const res = await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newJob),
  });
  return;
}

//Delete existing job
const deleteJob = async (id) => {
   console.log(id); 
   const res = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE'
  });
  return;
}

//Update existing job
const updateJob  = async (job) => {
  console.log(job);
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  });
  return;
}

export {addJob, deleteJob, updateJob};