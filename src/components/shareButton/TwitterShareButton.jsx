import React from "react";
import { ReactComponent as TwitterBtn } from "../../assets/svg/icon_twitter.svg";

const TwitterShareButton = ({ resultData }) => {
	const resultUrl = window.location.href;

	const shareTwitter = () => {
		const sendText = `π[ν¬λ¦¬μ€λ§μ€ μ§ν¬ νμ€νΈ κ²°κ³Ό]π λΉμ μ "${resultData.name}" μ νμλλ€.`;
		window.open(
			"https://twitter.com/intent/tweet?text=" + sendText + "&url=" + resultUrl
		);
	};
	return <TwitterBtn onClick={shareTwitter} />;
};
export default TwitterShareButton;
