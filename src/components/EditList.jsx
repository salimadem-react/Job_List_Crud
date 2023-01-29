import React from "react";

export default function EditList({ current, lists, setLists, trigger }) {
  function handInputPriority(e) {
    const value = e.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, priority: value } : li
    );

    setLists(newlist);
  }
  return (
    trigger && (
      <div className="edit">
        <div className="edit-inner">
          <select
            onChange={handInputPriority}
            name="priority"
            value={current.priority}
            className="edit-priority"
          >
            <option value="Urgent">Urgent</option>
            <option value="Regular">Regular</option>
            <option value="Trivial">Trivial</option>
          </select>

          <button type="submit" className="update-btn">
            Update
          </button>
        </div>
      </div>
    )
  );
}
