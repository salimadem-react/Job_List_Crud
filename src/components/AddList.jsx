import React, { useRef, useState } from "react";

export default function AddList({ setLists, lists }) {
  const jobRef = useRef();
  const [priority, setPriority] = useState("Urgent");
  function handleSubmit(e) {
    e.preventDefault();
    const job = e.target.job.value;

    const newlist = {
      id: lists.length + 1,
      job,
      priority,
      priorityNum: priority === "Urgent" ? 1 : priority === "Regular" ? 2 : 3,
    };
    setLists((prev) => {
      return prev.concat(newlist);
    });

    jobRef.current.value = "";
  }

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label>
        Job:
        <input
          pattern="^[a-zA-Z\s]*$"
          maxlength="70"
          type="text"
          name="job"
          placeholder="Enter job name"
          ref={jobRef}
          required
        />
      </label>
      <label>
        Priority:
        <select
          required
          className="priority"
          onChange={(e) => {
            setPriority(e.target.value);
          }}
        >
          <option value="Urgent">Urgent</option>
          <option value="Regular">Regular</option>
          <option value="Trivial">Trivial</option>
        </select>
      </label>

      <button type="submit">Create</button>
    </form>
  );
}
