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

export {addJob};