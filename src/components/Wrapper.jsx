import React from "react";
import styles from "../style/Wrap.module.scss";

const Wrapper = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
