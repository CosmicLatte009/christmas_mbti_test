import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ResultData } from "../assets/data/resultData";
import { ReactComponent as Bow } from "../assets/svg/icon_bowGreen.svg";
import Wrapper from "../components/Wrapper";
import Match from "../components/Match";
import Guage from "../components/Guage";
import ResultDesc from "../components/ResultDesc";
import Button from "../components/Button";
import ShareButton from "../components/ShareButton.jsx";
import styles from "../style/ResultPage.module.scss";

const ResultPage = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const mbti = searchParams.get("mbti");

	const [resultData, setResultData] = useState({});

	useEffect(() => {
		window.scrollTo(0, 0);
		const result = ResultData.find((s) => s.type === mbti);
		setResultData(result);
	}, [mbti]);

	return (
		<Wrapper>
			<main>
				<Bow className={styles["bow-icon"]} />
				<h1 className={styles.title}>{resultData.name}</h1>
				<img src={resultData.image} alt="결과 이미지" width={300}></img>
				<Guage resultData={resultData} />
				<ResultDesc resultData={resultData} />
				<Match resultData={resultData} />
				<div className={styles["btn-group"]}>
					<Button
						bold
						onClick={() => navigate("/allResult", { state: resultData })}
					>
						내 유형 질투력 순위 보기
					</Button>
					<Button bold onClick={() => navigate("/")}>
						테스트 다시하기
					</Button>
					<ShareButton resultData={resultData} />
				</div>
			</main>
		</Wrapper>
	);
};

export default ResultPage;
