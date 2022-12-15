import React from "react";
import styles from "../style/ResultDesc.module.scss";
import ResultList from "./ResultList";

const ResultDesc = ({ resultData }) => {
	const arrJealousy = (resultData.jealousyDesc || "").split("\n");
	const arrGuilty = (resultData.guiltyDesc || "").split("\n");
	const arrCompare = (resultData.compareDesc || "").split("\n");

	return (
		<div className={styles.desc}>
			<h2>당신은 "{resultData.name}" 유형입니다.</h2>
			<ResultList arr={arrJealousy}>질투력</ResultList>
			<ResultList arr={arrGuilty}>유죄력</ResultList>
			<ResultList arr={arrCompare}>궁합</ResultList>
		</div>
	);
};

export default ResultDesc;
