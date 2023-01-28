import React, { useState } from "react";
import AddList from "./AddList";
import EditList from "./EditList";
import "./Crud.css";

export default function Crud() {
  const list = [
    {
      id: "1",
      job: "My job name 1",
      priority: "Urgent",
    },
    {
      id: "2",
      job: "My job name 2",
      priority: "Regular",
    },
  ];

  const [lists, setLists] = useState(list);
  const [updateState, setUpdateState] = useState(-1);

  function handleEdit(id) {
    setUpdateState(id);
  }

  function handleDelete(id) {
    const newlist = lists.filter((li) => li.id !== id);
    setLists(newlist);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const priority = e.target.priority.value;
    const newlist = lists.map((li) =>
      li.id === updateState ? { ...li, priority: priority } : li
    );
    setLists(newlist);
    setUpdateState(-1);
  }

  const strDescending = [...lists].sort((a) =>
    a.priority === "Urgent" ? -1 : 1
  );

  return (
    <div className="crud">
      <div>
        <AddList setLists={setLists} />
        <form onSubmit={handleSubmit}>
          <table>
            {strDescending.map((current) =>
              updateState === current.id ? (
                <EditList current={current} lists={lists} setLists={setLists} />
              ) : (
                <tr>
                  <td>{current.job}</td>
                  <td>{current.priority}</td>
                  <td>
                    <button
                      className="edit"
                      onClick={() => handleEdit(current.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete"
                      type="button"
                      onClick={() => handleDelete(current.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </table>
        </form>
      </div>
    </div>
  );
}
