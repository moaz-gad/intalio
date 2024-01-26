import styles from "./userSelector.module.css";

const UserSelector = ({ label, selectedUsers, onUsersChange }) => {
  const handleChange = (event) => {
    const value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    onUsersChange(value);
  };

  return (
    <div className={styles.userSelector}>
      <label htmlFor="user-selector">{label}</label>
      <select
        multiple
        id="user-selector"
        value={selectedUsers}
        onChange={handleChange}
        className={styles.select}
      >
        {/* Dummy data for selection */}
        <option value="user1">User 1</option>
        <option value="user2">User 2</option>
        {/* ... more options ... */}
      </select>
    </div>
  );
};

export default UserSelector;
