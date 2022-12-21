import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ReactComponent as TitleLogo } from "../assets/svg/logo.svg";
import { ReactComponent as Bow } from "../assets/svg/icon_bow.svg";
import Wrapper from "../components/common/Wrapper";
import Button from "../components/common/Button";
import styles from "../style/pagesStyle/HomePage.module.scss";

const HomePage = () => {
	const navigate = useNavigate();

	const handleBtnClick = () => {
		navigate("./question");
	};
	return (
		<>
			<Helmet>
				<meta
					name="naver-site-verification"
					content="40a12bac3fad1a6b0bddfbd55952079d48ef2a12"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="크리스마스 질투 유형 테스트" />
				<meta
					property="og:description"
					content="연애할 때 내 질투의 정도를 알아보는 재미용 심리 테스트입니다."
				/>
				<meta
					property="og:image"
					content="https://christmas-mbti-test.netlify.app/static/media/06_gingerBread.bc34159964227c1f3817.png"
				/>
				<meta
					property="og:url"
					content="https://christmas-mbti-test.netlify.app"
				/>
				<link rel="icon" href="./assets/svg/favicon.svg" />
				<link rel="apple-touch-icon" href="./assets/svg/favicon.svg" />
				<meta
					name="description"
					content="연애할 때 내 질투의 정도를 알아보는 재미용 심리 테스트입니다."
				/>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>크리스마스 질투 유형 테스트</title>
			</Helmet>
			<Wrapper>
				<Bow className={styles["bow-icon"]} />
				<h1 className={styles.title}>
					<TitleLogo />
				</h1>
				<strong className={styles.phrase}>연애할 때 내 질투 유형은?</strong>
				<div className={styles.paragraph}>
					<p>
						이번 겨울, 애인과 기념일도 있어서
						<br /> 즐겁게 놀려고 계획을 세웠다.
						<br />
						고기도 먹고, 내 친구B를 소개해주는 자리도 갖고,
						<br /> 애인이 이벤트룸 예약도 했다.
					</p>
					<p> 하지만 기대와 달리 마음 불편한 일들이 일어나는데...</p>
				</div>
				<div className={styles["btn-wrap"]}>
					<Button bold onClick={handleBtnClick}>
						테스트 시작하기
					</Button>
				</div>
			</Wrapper>
		</>
	);
};

export default HomePage;
