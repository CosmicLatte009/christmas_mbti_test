import React from "react";
import styles from "../style/Guage.module.scss";
import GuageHeart from "./GuageHeart";

const Guage = ({ ...props }) => {
	const { resultData } = props;

	const jealousyHearts = resultData.jealousyGuage;
	let jealousyHeartArr = new Array(jealousyHearts).fill(0);

	const guiltyHearts = resultData.guiltyGuage;
	let guiltyHeartArr = new Array(guiltyHearts).fill(0);

	return (
		<div className={styles["guage-box"]}>
			<GuageHeart arr={jealousyHeartArr}>질투력</GuageHeart>
			<GuageHeart arr={guiltyHeartArr}>유죄력</GuageHeart>
		</div>
	);
};

export default Guage;
