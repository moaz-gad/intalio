import React from "react";
import styles from "./userSelector.module.css";
import { AiOutlineUserAdd } from "react-icons/ai";

const UserSelector = ({ label, selectedUsers, onUserRemove, onAddUser }) => {
  return (
    <div className={styles.userSelectorContainer}>
      <label className={styles.userSelectorLabel}>{label}</label>
      <div className={styles.userSelector}>
        <div className={styles.userChipsContainer}>
          {selectedUsers.map((user) => (
            <div key={user.id} className={styles.userChip}>
              <img src={user.avatar} className={styles.avatar} />
              <span className={styles.userName}>{user.name}</span>
              <button
                onClick={() => onUserRemove(user.id)}
                className={styles.removeUserButton}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        <button onClick={onAddUser} className={styles.addUserButton}>
          <AiOutlineUserAdd />
        </button>
      </div>
    </div>
  );
};

export default UserSelector;
