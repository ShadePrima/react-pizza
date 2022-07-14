import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Not Found</h1>
      <p className={styles.description}>This page is not found in our storе</p>
    </div>
  );
};

export default NotFoundBlock;
