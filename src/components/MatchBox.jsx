import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import styles from "../style/MatchBox.module.scss";

const MatchBox = (props) => {
	const { children, link, compare, compareImg } = props;
	const navigate = useNavigate();

	const handleBoxClick = (type) => {
		navigate({
			pathname: "/result",
			search: `?${createSearchParams({ mbti: type })}`,
		});
	};

	return (
		<article className={styles.wrap} onClick={() => handleBoxClick(link)}>
			<h3>{children}</h3>
			<img src={compareImg} alt="궁합 유형" />
			<p>{compare}</p>
		</article>
	);
};

export default MatchBox;
