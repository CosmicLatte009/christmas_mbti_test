import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ResultData } from "../assets/data/resultData";
import { ReactComponent as Bow } from "../assets/svg/icon_bowGreen.svg";
import Wrapper from "../components/common/Wrapper";
import Match from "../components/match/Match";
import Guage from "../components/guage/Guage";
import ResultDesc from "../components/resultDesc/ResultDesc";
import Button from "../components/common/Button";
import ShareButton from "../components/shareButton/ShareButton.jsx";
import { Helmet } from "react-helmet-async";
import styles from "../style/pagesStyle/ResultPage.module.scss";

const ResultPage = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const mbti = searchParams.get("mbti");

	const [resultData, setResultData] = useState({});

	const resultUrl = `https://christmas-mbti-test.netlify.app/result?mbti=${mbti}`;
	const ogDesc = `당신은 "${resultData.name}" 유형입니다`;

	useEffect(() => {
		window.scrollTo(0, 0);
		const result = ResultData.find((s) => s.type === mbti);
		setResultData(result);
	}, [mbti]);

	return (
		<>
			<Helmet>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="내 크리스마스 질투 테스트 결과" />
				<meta property="og:description" content={ogDesc} />
				<meta property="og:image" content={resultData.image} />
				<meta property="og:url" content={resultUrl} />
				<meta name="description" content={ogDesc} />
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>내 크리스마스 질투 테스트 결과</title>
			</Helmet>
			<Wrapper>
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
			</Wrapper>
		</>
	);
};

export default ResultPage;
