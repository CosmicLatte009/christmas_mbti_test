import React from "react";
import { ReactComponent as TwitterBtn } from "../assets/svg/icon_twitter.svg";

const TwitterShareButton = () => {
	const resultUrl = window.location.href;

	const shareTwitter = () => {
		const sendText = "🎄내 크리스마스 질투 유형 결과🎄";
		window.open(
			"https://twitter.com/intent/tweet?text=" + sendText + "&url=" + resultUrl
		);
	};
	return <TwitterBtn onClick={shareTwitter} />;
};
export default TwitterShareButton;
