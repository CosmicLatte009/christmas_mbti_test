import React from "react";
import styles from "../../style/commonStyle/Wrapper.module.scss";

const Wrapper = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
