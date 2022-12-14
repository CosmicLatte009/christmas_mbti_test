import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { QuestionData } from "../assets/data/questionData";
import { ReactComponent as BookSVG } from "../assets/svg/icon_book.svg";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import btns from "../style/Button.module.scss";
import styles from "../style/QuestionPage.module.scss";

const QuestionPage = () => {
	const [questionNum, setQuestionNum] = useState(0);
	const [totalScore, setTotalScore] = useState([
		{ id: "EI", score: 0 },
		{ id: "SN", score: 0 },
		{ id: "TF", score: 0 },
		{ id: "JP", score: 0 },
	]);

	const navigate = useNavigate();

	const handleClickBtn = (n, type) => {
		const newScore = totalScore.map((s) =>
			s.id === type ? { id: s.id, score: s.score + n } : s
		);

		setTotalScore(newScore);
		//11번 문제까진 다음 문제로 문제수 증가
		if (QuestionData.length !== questionNum + 1) {
			setQuestionNum(questionNum + 1);
		} else {
			//mbti 도출
			const mbti = newScore.reduce(
				(acc, curr) =>
					acc +
					(curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
				""
			);
			//결과 페이지로 이동
			navigate({
				pathname: "/result",
				search: `?${createSearchParams({ mbti: mbti })}`,
			});
		}
	};

	return (
		<Wrapper>
			<BookSVG className={styles["book-icon"]} />
			<span className={styles.index}>{QuestionData[questionNum].id} / 12</span>
			<div className={styles.paragraph}>{QuestionData[questionNum].title}</div>
			<div className={styles["btn-group"]}>
				<Button
					className={btns["btn-option"]}
					onClick={() => handleClickBtn(1, QuestionData[questionNum].type)}
				>
					{QuestionData[questionNum].answera}
				</Button>
				<Button
					className={btns["btn-option"]}
					onClick={() => handleClickBtn(0, QuestionData[questionNum].type)}
				>
					{QuestionData[questionNum].answerb}
				</Button>
			</div>
		</Wrapper>
	);
};

export default QuestionPage;
