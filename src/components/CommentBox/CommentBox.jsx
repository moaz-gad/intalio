// src/components/CommentBox/CommentBox.jsx

import React from "react";
import styles from "./commentBox.module.css";

const CommentBox = ({ comments, onCommentsChange, maxLength = 255 }) => {
  const handleTextChange = (event) => {
    const { value } = event.target;
    if (value.length <= maxLength) {
      onCommentsChange(value);
    }
  };

  return (
    <div className={styles.commentBox}>
      <textarea
        value={comments}
        onChange={handleTextChange}
        placeholder="Enter your comments here..."
        maxLength={maxLength} // HTML5 prop to prevent exceeding the limit
      />
      <div className={styles.characterCount}>
        {comments.length} / {maxLength}
      </div>
    </div>
  );
};

export default CommentBox;
