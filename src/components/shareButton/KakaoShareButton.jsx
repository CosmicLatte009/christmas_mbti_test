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
				title: "🎄내 크리스마스 질투 테스트 결과🎄",
				description: `당신은 "${resultData.name}" 유형입니다`,
				imageUrl: url + resultData.image,
				link: {
					mobileWebUrl: resultUrl,
					webUrl: resultUrl,
				},
			},
			buttons: [
				{
					title: "테스트 하러가기",
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
