import React from "react";
import styles from "../../style/matchStyle/Match.module.scss";
import MatchBox from "./MatchBox";

const Guage = ({ resultData }) => {
	return (
		<div className={styles.match}>
			<MatchBox
				compare={resultData.goodName}
				compareImg={resultData.goodTypeImg}
				link={resultData.goodType}
			>
				잘 맞는 유형
			</MatchBox>
			<MatchBox
				compare={resultData.badName}
				compareImg={resultData.badTypeImg}
				link={resultData.badType}
			>
				안 맞는 유형
			</MatchBox>
		</div>
	);
};

export default Guage;
