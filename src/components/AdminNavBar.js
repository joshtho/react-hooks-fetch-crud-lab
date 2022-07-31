import React from "react";
import QuestionForm from "./QuestionForm";

function AdminNavBar({ onChangePage }) {
  
  function handleClickAndDisplayForm() {
    onChangePage("Form")
    return <QuestionForm />
  }

  return (
    <nav>
      <button onClick={handleClickAndDisplayForm}>New Question</button>
      <button onClick={() => onChangePage("List")}>View Questions</button>
    </nav>
  );
}

export default AdminNavBar;
