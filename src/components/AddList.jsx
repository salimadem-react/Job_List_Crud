import React, { useRef } from "react";

export default function AddList({ setLists }) {
  const jobRef = useRef();
  const priorityRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const job = e.target.job.value;
    const priority = e.target.priority.value;
    const newlist = {
      id: 3,
      job,
      priority,
    };
    setLists((prev) => {
      return prev.concat(newlist);
    });

    jobRef.current.value = "";
    priorityRef.current.value = "";
  }

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label>
        Job:
        <input
          type="text"
          name="job"
          placeholder="Enter job name"
          ref={jobRef}
        />
      </label>
      <label>
        Priority:
        <input
          type="text"
          name="priority"
          placeholder="Enter priority"
          ref={priorityRef}
        />
      </label>

      <button type="submit">Create</button>
    </form>
  );
}
