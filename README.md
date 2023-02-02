<div align="center">

# 🎄크리스마스 MBTI 유형 테스트🎄

<img width="500" src="https://user-images.githubusercontent.com/87015026/223358808-7c06dd25-d3dd-4525-842a-d4a39029e0d7.png">

</div>
</br>

### **[배포 URL]**

- URL: https://christmas-mbti-test.netlify.app

</br>

# 1. 개발 환경

### **[개발 환경]**

- React
- React-router
- useState, useEffect, useNavigate, useSearchParams
- CSS module, Sass

```
react: "^18.2.0",
react-router-dom: "^6.4.3",
sass: "^1.56.1",
sass-loader: "^13.2.0"
```

### **[서비스 배포 환경]**

- 🔗netlify

### **[SEO 최적화 도구]**

- 네이버 웹 마스터 도구

### **[버전 관리 및 트러블슈팅]**

- GitHub
- GitHub-Wiki

</br>

# 2. 폴더 트리 구조

```
📦
├─ public
│  ├─ _redirects
│  ├─  favicon.svg
│  ├─ index.html
│  ├─ robots.txt
│  └─ sitemap.xml
└─ src
│  ├─ App.js
│  ├─ index.js
│  ├─ assets
│  │  ├─ data
│  │  │  ├─ questionData.js
│  │  │  └─ resultData.js
│  │  ├─ svg
│  │  └─ typeImage
│  ├─ components
│  │  ├─ common
│  │  │  ├─ Button.jsx
│  │  │  └─ Wrapper.jsx
│  │  ├─ guage
│  │  │  ├─ Guage.jsx
│  │  │  └─ GuageHeart.jsx
│  │  ├─ match
│  │  │  ├─ Match.jsx
│  │  │  └─ MatchBox.jsx
│  │  ├─ resultDesc
│  │  │  ├─ ResultDesc.jsx
│  │  │  └─ ResultList.jsx
│  │  └─ shareButton
│  │     ├─ FacebookShareButton.jsx
│  │     ├─ KakaoShareButton.jsx
│  │     ├─ ShareButton.jsx
│  │     └─ TwitterShareButton.jsx
│  ├─ page
│  │  ├─ AllResultPage.jsx
│  │  ├─ HomePage.jsx
│  │  ├─ QuestionPage.jsx
│  │  └─ ResultPage.jsx
│  └─ style
│     ├─ commonStyle
│     │  ├─ Button.module.scss
│     │  ├─ Wrapper.module.scss
│     │  ├─ _utils.scss
│     │  └─ reset.css
│     ├─ guageStyle
│     │  ├─ Guage.module.scss
│     │  └─ GuageHeart.module.scss
│     ├─ matchStyle
│     │  ├─ Match.module.scss
│     │  └─ MatchBox.module.scss
│     ├─ pagesStyle
│     │  ├─ AllResultPage.module.scss
│     │  ├─ HomePage.module.scss
│     │  ├─ QuestionPage.module.scss
│     │  └─ ResultPage.module.scss
│     ├─ resultDescStyle
│     │  ├─ ResultDesc.module.scss
│     │  └─ ResultList.module.scss
│     └─ shareButtonStyle
│        └─ ShareButton.module.scss
├─ netlify.toml
├─ package-lock.json
└─ package.json  

```

©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)

</br>

# 3. 구현 기능

|                                                            홈페이지                                                            |                                                          질문 페이지                                                           |                                                          결과 페이지                                                           |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img width="300" src="https://user-images.githubusercontent.com/87015026/223365678-c146de04-3f05-4b84-b3b6-405250098337.png"/> | <img width="300" src="https://user-images.githubusercontent.com/87015026/223365754-3cfa5183-a8db-4828-a03f-371d07d9984f.png"/> | <img width="300" src="https://user-images.githubusercontent.com/87015026/223365709-94b9b645-bbce-4320-adc1-4bc5669dbd82.png"/> |
|                                         시작하기 버튼 클릭하면 질문 페이지로 navigate                                          |                                         한 답안을 클릭하면 다음 질문페이지로 navigate                                          |                                         12문제 전부 답을 고르면 유형 페이지로 navigate                                         |

|                                                       궁합 및 유형 설명                                                        |                                                     질투 유형 순위 페이지                                                      |                                                            SNS 공유                                                            |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img width="300" src="https://user-images.githubusercontent.com/87015026/223372638-3433701b-3d22-4a24-83b0-f5408b571f8e.png"/> | <img width="300" src="https://user-images.githubusercontent.com/87015026/223367026-45b8b600-3cfa-4aae-bdb1-c07fd168cddb.png"/> | <img width="300" src="https://user-images.githubusercontent.com/87015026/223373202-42dc1d20-dbbb-4c9b-8368-b7011cd5ee38.png"/> |
|                                          궁합 이미지 클릭하면 해당 유형으로 navigate                                           |                                          유형 이미지 클릭하면 해당 유형으로 navigate                                           |                                          SNS 공유 버튼 누르면 테스트 결과 페이지 공유                                          |

 </br>

# 4. 핵심 코드

## **questionPage 로직** ✅

### **1. 유형별 점수 추가하기**

```
const [totalScore, setTotalScore] = useState([
		{ id: "EI", score: 0 },
		{ id: "SN", score: 0 },
		{ id: "TF", score: 0 },
		{ id: "JP", score: 0 },
	]);

const newScore = totalScore.map((s) =>
	s.id === type ? { id: s.id, score: s.score + n } : s);
	setTotalScore(newScore);
```

- QuestionData. js의 type과 QuestionPage.js의 totalscore useState의 id가 일치할 때 score에 점수를 추가한다.

- 일치하지 않으면 state의 기존 객체를 유지한다.

</br>

### **2. 문항 수 증가시키다가 12번 문항에서 mbti 도출**

```
11번 문제까진 다음 문제로 문제수 증가
 if (QuestionData.length !== questionNum + 1) {
		setQuestionNum(questionNum + 1);
} else {
        //mbti 도출
		const mbti = newScore.reduce(
			(acc, curr) =>
			acc + (curr.score >= 2 ?
            curr.id.substring(0, 1) : curr.id.substring(1, 2)), ""
		);
        //결과 페이지로 이동
        navigate({
            pathname: "/result",
            search: `?${createSearchParams({ mbti: mbti })}`,
        });
    }
```

- 문항 수 11번까지 증가시키기

  questionNum이 QuestionData.js의 길이와 일치하지 않을 때 questionNum을 1씩 증가시켜준다.

- 12번 문항에서 mbit 도출하기

  문항별 점수(score) 저장된 newScore 배열을 돌면서 점수가 2보다 크거나 같으면 앞의 알파벳을, 작으면 뒤의 알파벳을 acc에 저장한다. 그리고 직전에 동작한 콜백 함수가 리턴한 값을 acc에 전부 모아 mbti 유형을 완성한다.

- 결과 페이지로 이동

  URL의 result 경로(path) 뒤에 붙는 쿼리(query)를 설정. `/result?mbti=ENFP` 형태의 URL로 나온다.

</br>

## **resultPage 로직** ✅

### **1. QuestionPage로부터 mbti 데이터 받아오기**

```
const navigate = useNavigate();
const [searchParams] = useSearchParams();
const mbti = searchParams.get("mbti");

const [resultData, setResultData] = useState({});

useEffect(() => {
const result = ResultData.find((s) => s.type === mbti);
	setResultData(result);
	}, [mbti]);
```

- QuestionData의 mbti query를 가져오고, mbti가 바뀔 때마다 바뀐 mbti와 일치하는 ResultData의 type을 찾아서 해당 데이터를 가져온다.

 </br>

> 참고 GitHub: https://github.com/ggombee/catmbti

  </br>
