import React from "react";
import styles from "../style/ResultList.module.scss";

const ResultList = (props) => {
	const { children, arr } = props;

	return (
		<>
			<p className={styles.title}>{children}</p>
			<ul className={styles["result-list"]}>
				{arr.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</>
	);
};

export default ResultList;
