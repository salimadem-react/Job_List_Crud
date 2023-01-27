import React, { useState } from "react";
import AddList from "./AddList";
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

  return (
    <div className="crud">
      <div>
        <AddList setLists={setLists} />
        <table>
          {lists.map((current) => (
            <tr>
              <td>{current.job}</td>
              <td>{current.priority}</td>
              <td>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
