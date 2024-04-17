import React, { useState } from "react";
import "./TodoList.css";
import { CiCircleCheck } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

const TodoList = () => {
  const inputs = document.getElementById("input");
  let list = document.getElementById("list");
  const addBtn = document.getElementById("addBtn");

  const app = () => {
    if (inputs.value === "") {
      alert("Please Enter a task");
    } else {
      const item = inputs.value;
      const li = document.createElement("li");
      li.innerHTML = `${item} <span onclick(remove)>&#x274c;</span>`;
      list.appendChild(li);
      inputs.value = "";
    }

    save();
  };

  const remove = (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      save();
    }
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      save();
    }

  };

  const save = () => {
    localStorage.setItem("save", JSON.stringify(list.innerHTML));
    console.log(JSON.parse(localStorage.getItem("save")));
  };

  const load = () => {
   JSON.parse(localStorage.getItem("save"));
    console.log(JSON.parse(localStorage.getItem("save")));
  };




  return (
    <section className="section_todolist vh-100  d-flex justify-content-center align-items-center">
      <div className="container bg-white rounded-3 p-4 d-flex flex-column justify-content-center gap-3">
        <h2>To-do List</h2>
        <div className=" input-container bg-dark-subtle rounded-5 d-flex justify-content-between align-items-center">
          <input
            type="text"
            placeholder="Enter your todo lists"
            className=" rounded-start-4 p-2 px-3 inputs bg-dark-subtle m-0"
            id="input"
          />
          <button
            className="w-25 button1 p-2 rounded-5"
            id="addBtn"
            onClick={app}
          >
            ADD
          </button>
        </div>
        <ul id="list" onClick={remove}></ul>
      </div>
    </section>
  );
};

export default TodoList;
