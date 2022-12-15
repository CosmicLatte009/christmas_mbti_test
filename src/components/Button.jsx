import React from "react";
import styles from "../style/Button.module.scss";

const Button = (props) => {
	const { children, onClick, bold, option } = props;
	return (
		<button
			className={`${bold && styles.bold} ${option && styles.option}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
