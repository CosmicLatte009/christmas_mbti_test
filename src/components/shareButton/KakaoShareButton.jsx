import React, { useEffect } from "react";
import { ReactComponent as KakaoBtn } from "../../assets/svg/icon_kakao.svg";
const { Kakao } = window;

const KakaoShareButton = ({ resultData }) => {
	const url = "https://christmas-mbti-test.netlify.app";
	const resultUrl = window.location.href;

	useEffect(() => {
		Kakao.cleanup();
		Kakao.init("ce4904e6614dfe509f2083cb25781476");
	}, []);

	const shareKakao = () => {
		Kakao.Share.sendDefault({
			objectType: "feed",
			content: {
				title: "πλ΄ ν¬λ¦¬μ€λ§μ€ μ§ν¬ νμ€νΈ κ²°κ³Όπ",
				description: `λΉμ μ "${resultData.name}" μ νμλλ€`,
				imageUrl: url + resultData.image,
				link: {
					mobileWebUrl: resultUrl,
					webUrl: resultUrl,
				},
			},
			buttons: [
				{
					title: "νμ€νΈ νλ¬κ°κΈ°",
					link: {
						mobileWebUrl: url,
						webUrl: url,
					},
				},
			],
		});
	};
	return <KakaoBtn onClick={shareKakao} />;
};

export default KakaoShareButton;
