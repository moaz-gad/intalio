import React from "react";
import styles from "./userSelector.module.css";
import { PiUserPlusLight } from "react-icons/pi";

const UserSelector = ({ label, selectedUsers, onUserRemove, onAddUser }) => {
  return (
    <div className={styles.selectedUsersContainer}>
      <label className={styles.userSelectorLabel}>{label}</label>
      <div className={styles.userSelector}>
        <div className={styles.userChipsContainer}>
          {selectedUsers.map((user) => (
            <div key={user.id} className={styles.userChip}>
              <img
                src={user.avatar}
                alt={user.name}
                className={styles.avatar}
              />
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
          <PiUserPlusLight />
        </button>
      </div>
    </div>
  );
};

export default UserSelector;
