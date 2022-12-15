import React from "react";
import { ReactComponent as TwitterBtn } from "../assets/svg/icon_twitter.svg";

const TwitterShareButton = ({ resultData }) => {
	const resultUrl = window.location.href;

	const shareTwitter = () => {
		const sendText = `🎄[크리스마스 질투 테스트 결과] 당신은 "${resultData.name}" 유형입니다.🎄`;
		window.open(
			"https://twitter.com/intent/tweet?text=" + sendText + "&url=" + resultUrl
		);
	};
	return <TwitterBtn onClick={shareTwitter} />;
};
export default TwitterShareButton;
