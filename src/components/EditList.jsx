import React from "react";

export default function EditList({ current, lists, setLists }) {
  function handInputPriority(e) {
    const value = e.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, priority: value } : li
    );

    setLists(newlist);
  }
  return (
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          onChange={handInputPriority}
          name="priority"
          value={current.priority}
        />
      </td>
      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  );
}
