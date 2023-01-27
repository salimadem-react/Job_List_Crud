import React from "react";

export default function AddList() {
  return (
    <form className="addForm">
      <label>
        Job:
        <input type="text" name="job" placeholder="Enter job name" />
      </label>
      <label>
        Priority:
        <input type="text" name="priority" placeholder="Enter priority" />
      </label>

      <button type="submit">Create</button>
    </form>
  );
}
