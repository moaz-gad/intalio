// src/components/ForwardForm/ForwardForm.jsx

import React, { useState } from "react";
import UserSelector from "../UserSelector/UserSelector";
import Dropdown from "../Dropdown/Dropdown"; // Assuming you use Dropdown for purpose
import DatePicker from "../DatePicker/DatePicker";
import CommentBox from "../CommentBox/CommentBox";
import Button from "../Button/Button";
import styles from "./forwardForm.module.css";

const ForwardForm = () => {
  // State for form fields
  const [toUsers, setToUsers] = useState([]);
  const [ccUsers, setCcUsers] = useState([]);
  const [purpose, setPurpose] = useState("");
  const [dueDate, setDueDate] = useState(new Date()); // Default to today's date, for example
  const [comments, setComments] = useState("");

  // Handlers for form fields
  // ...

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the form submission, e.g., send data to an API
    console.log({
      toUsers,
      ccUsers,
      purpose,
      dueDate,
      comments,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.forwardForm}>
      <UserSelector
        label="To"
        selectedUsers={toUsers}
        onUsersChange={setToUsers}
      />
      <UserSelector
        label="CC"
        selectedUsers={ccUsers}
        onUsersChange={setCcUsers}
      />
      <Dropdown selectedPurpose={purpose} onPurposeChange={setPurpose} />
      <DatePicker selectedDate={dueDate} onDateChange={setDueDate} />
      <CommentBox comments={comments} onCommentsChange={setComments} />
      <div className={styles.actionButtons}>
        <Button
          type="button"
          onClick={() => {
            /* handle cancel */
          }}
        >
          Cancel
        </Button>
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
};

export default ForwardForm;
