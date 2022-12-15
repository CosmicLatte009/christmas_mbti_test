import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as TitleLogo } from "../assets/svg/logo.svg";
import { ReactComponent as Bow } from "../assets/svg/icon_bow.svg";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
// import btns from "../style/Button.module.scss";
import styles from "../style/HomePage.module.scss";

const HomePage = () => {
	const navigate = useNavigate();

	const handleBtnClick = () => {
		navigate("./question");
	};
	return (
		<Wrapper>
			<main>
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
			</main>
		</Wrapper>
	);
};

export default HomePage;
