import React, { useState } from "react";
import Select from "react-select";
import Dropdown from "../Dropdown/Dropdown";
import DatePicker from "../DatePicker/DatePicker";
import CommentBox from "../CommentBox/CommentBox";
import Button from "../Button/Button";
import styles from "./forwardForm.module.css";
import avatarImage from "../../assets/avatar.svg";
import { RiUserAddLine } from "react-icons/ri";

const CustomDropdownIndicator = () => {
  return (
    <div>
      <RiUserAddLine />
    </div>
  );
};
const CustomSelectedOption = ({ data }) => {
  return (
    <div>
      <img src={data.avatar} alt={data.label} width="24" height="24" />{" "}
      {data.label}
    </div>
  );
};
const customStyles = {
  indicatorsContainer: (provided) => ({
    ...provided,
    cursor: "pointer", // Set the cursor to pointer
  }),
  control: (provided) => ({
    ...provided,
    paddingRight: "10px",
  }),
  // Styles for the labels
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#f8f8f8",
  }),

  multiValueRemove: (provided) => ({
    ...provided,
    ":hover": {
      backgroundColor: "none",
      color: "black",
      cursor: "pointer",
    },
  }),
};
const ForwardForm = () => {
  const toUsersDummyData = [
    { id: 1, name: "Humail Al Zarooni", avatar: avatarImage },
    { id: 2, name: "Ghalib Ahmed Lone", avatar: avatarImage },
    { id: 3, name: "Khaled El Sawy", avatar: avatarImage },
    { id: 4, name: "User4", avatar: avatarImage },
  ];

  const ccUsersDummyData = [
    { id: 5, name: "Lisa Pinder", avatar: avatarImage },
    { id: 6, name: "Moath Kasasbeh", avatar: avatarImage },
    { id: 7, name: "Aria Al Shelbawy", avatar: avatarImage },
  ];

  // State for form fields
  const [toUsers, setToUsers] = useState([]);
  const [ccUsers, setCcUsers] = useState([]);
  const [purpose, setPurpose] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [comments, setComments] = useState("");

  // Options for react-select
  const toUsersOptions = toUsersDummyData.map((user) => ({
    value: user.id,
    label: user.name,
    avatar: user.avatar,
  }));
  const ccUsersOptions = ccUsersDummyData.map((user) => ({
    value: user.id,
    label: user.name,
    avatar: user.avatar,
  }));

  // Handlers for react-select
  const handleToUsersChange = (selectedOptions) => {
    const selectedUsers = selectedOptions.map((option) =>
      toUsersDummyData.find((user) => user.id === option.value)
    );
    setToUsers(selectedUsers);
  };

  const handleCcUsersChange = (selectedOptions) => {
    const selectedUsers = selectedOptions.map((option) =>
      ccUsersDummyData.find((user) => user.id === option.value)
    );
    setCcUsers(selectedUsers);
  };

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
        <div className={styles.selectContainer}>
          <label htmlFor="toUsers">To</label>
          <Select
            id="toUsers"
            options={toUsersOptions}
            isMulti
            onChange={handleToUsersChange}
            closeMenuOnSelect={false}
            components={{
              DropdownIndicator: CustomDropdownIndicator,
              MultiValueLabel: CustomSelectedOption,
            }}
            styles={customStyles}
          />
        </div>
        <div className={styles.selectContainer}>
          <label htmlFor="ccUsers">CC</label>
          <Select
            id="ccUsers"
            options={ccUsersOptions}
            isMulti
            onChange={handleCcUsersChange}
            components={{
              DropdownIndicator: CustomDropdownIndicator,
              MultiValueLabel: CustomSelectedOption,
            }}
            styles={customStyles}
          />
        </div>
        <Dropdown selectedPurpose={purpose} onPurposeChange={setPurpose} />
        <label>Due date</label>
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
