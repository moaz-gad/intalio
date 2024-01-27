// src/components/ForwardForm/ForwardForm.jsx

import React, { useState } from "react";
import UserSelector from "../UserSelector/UserSelector";
import Dropdown from "../Dropdown/Dropdown";
import DatePicker from "../DatePicker/DatePicker";
import CommentBox from "../CommentBox/CommentBox";
import Button from "../Button/Button";
import styles from "./forwardForm.module.css";

const ForwardForm = () => {
  // Dummy data for all users
  const allUsers = [
    { id: 1, name: "Humaid Al Zarooni", avatar: "/path/to/avatar1.jpg" },
    { id: 2, name: "Ghalib Ahmed Lone", avatar: "/path/to/avatar2.jpg" },
    { id: 3, name: "Lisa Pinder", avatar: "/path/to/avatar3.jpg" },
    { id: 4, name: "Moath Kasasbeh", avatar: "/path/to/avatar4.jpg" },
    // ...more users
  ];

  // State for form fields
  const [toUsers, setToUsers] = useState([]);
  const [ccUsers, setCcUsers] = useState([]);
  const [showUserList, setShowUserList] = useState(false); // To show/hide the user list
  const [purpose, setPurpose] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [comments, setComments] = useState("");

  // Handler to toggle user list popup
  const handleToggleUserList = () => {
    setShowUserList(!showUserList);
  };

  // Handler to add a user to the selected list
  const handleAddUser = (user, type) => {
    if (type === "to") {
      setToUsers([...toUsers, user]);
    } else {
      setCcUsers([...ccUsers, user]);
    }
    // Hide the user list after adding a user
    setShowUserList(false);
  };

  // Handler to remove a user from the selected list
  const handleRemoveUser = (userId, type) => {
    if (type === "to") {
      setToUsers(toUsers.filter((user) => user.id !== userId));
    } else {
      setCcUsers(ccUsers.filter((user) => user.id !== userId));
    }
  };

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      toUsers,
      ccUsers,
      purpose,
      dueDate,
      comments,
    });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h1 className={styles.formTitle}>Forward</h1>
        <button type="button" className={styles.closeButton} onClick={() => {}}>
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit} className={styles.forwardForm}>
        <UserSelector
          label="To"
          selectedUsers={toUsers}
          onUserRemove={(userId) => handleRemoveUser(userId, "to")}
          onAddUser={handleToggleUserList}
        />
        {showUserList && (
          <ul className={styles.userList}>
            {allUsers
              .filter(
                (user) => !toUsers.some((selected) => selected.id === user.id)
              )
              .map((user) => (
                <li key={user.id} onClick={() => handleAddUser(user, "to")}>
                  <img src={user.avatar} alt={user.name} />
                  {user.name}
                </li>
              ))}
          </ul>
        )}
        <UserSelector
          label="CC"
          selectedUsers={ccUsers}
          onUserRemove={(userId) => handleRemoveUser(userId, "cc")}
          onAddUser={handleToggleUserList}
        />
        {/* Repeat the user list logic for CC if needed */}
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
    </div>
  );
};

export default ForwardForm;
