import React, { useState } from "react";
import "./Crud.css";

export default function Crud() {
  const list = [
    {
      id: "1",
      name: "My job name 1",
      priority: "Urgent",
    },
    {
      id: "2",
      name: "My job name 2",
      priority: "Regular",
    },
  ];

  const [lists, setLists] = useState(list);

  return (
    <div className="crud">
      <table>
        {lists.map((current) => (
          <tr>
            <td>{current.name}</td>
            <td>{current.priority}</td>
            <td>
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
