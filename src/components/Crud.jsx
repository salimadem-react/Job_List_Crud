import React, { useState } from "react";
import AddList from "./AddList";
import EditList from "./EditList";

import "./style.css";

export default function Crud() {
  const list = [
    {
      id: "1",
      job: "My job name 1",
      priority: "Urgent",
      priorityNum: 1,
    },
    {
      id: "2",
      job: "My job name 2",
      priority: "Regular",
      priorityNum: 2,
    },
    {
      id: "3",
      job: "My job name 3",
      priority: "Trivial",
      priorityNum: 3,
    },
  ];

  const [lists, setLists] = useState(list);
  const [updateState, setUpdateState] = useState(-1);
  const [search, setSearch] = useState("");

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

  const strDescending = [...lists].sort(
    (a, b) => a.priorityNum - b.priorityNum
  );

  console.log(lists);

  return (
    <div className="crud">
      <div>
        <AddList setLists={setLists} lists={lists} />
        <input
          type="text"
          placeholder="Search job.."
          className="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        ;
        <form onSubmit={handleSubmit}>
          <table>
            {strDescending
              .filter((current) => {
                return search.toLowerCase() === ""
                  ? current
                  : current.job.toLowerCase().includes(search);
              })
              .map((current) =>
                updateState === current.id ? (
                  <EditList
                    current={current}
                    lists={lists}
                    setLists={setLists}
                    trigger={true}
                  />
                ) : (
                  <tr>
                    <td
                      style={{
                        backgroundColor:
                          current.priority === "Urgent"
                            ? "red"
                            : current.priority === "Regular"
                            ? "#FFD700"
                            : "lightblue",
                      }}
                    >
                      {current.job}
                    </td>
                    <td
                      style={{
                        backgroundColor:
                          current.priority === "Urgent"
                            ? "red"
                            : current.priority === "Regular"
                            ? "#FFD700"
                            : "lightblue",
                      }}
                    >
                      {current.priority}
                    </td>
                    <td
                      style={{
                        backgroundColor:
                          current.priority === "Urgent"
                            ? "red"
                            : current.priority === "Regular"
                            ? "#FFD700"
                            : "lightblue",
                      }}
                    >
                      <button
                        className="editBtn"
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
