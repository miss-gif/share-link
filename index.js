// 모달 요소 가져오기
var openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const closeBtn = document.getElementById("closeBtn");

// 모달 열기 버튼 클릭 이벤트 리스너
openModalBtn.addEventListener("click", function () {
  console.log("Modal clicked");
  modal.style.display = "block";
});

// 모달 닫기 버튼 클릭 이벤트 리스너
closeBtn.addEventListener("click", function () {
  console.log("Close clicked");
  modal.style.display = "none";
});

// 모달 외부 클릭 시 모달 닫기
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    console.log("Outside modal clicked");
    modal.style.display = "none";
  }
});

// URL 복사 버튼 클릭 이벤트 리스너
const copyUrlBtn = document.getElementById("copyUrlBtn");
copyUrlBtn.addEventListener("click", function () {
  const url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(function () {
      alert("URL이 복사되었습니다.");
    })
    .catch(function (error) {
      console.error("Error copying URL: ", error);
    });
});

// 카카오톡 공유 버튼 생성
Kakao.Share.createDefaultButton({
  container: "#kakaotalk-sharing-btn",
  objectType: "feed",
  content: {
    title: "딸기 치즈 케익",
    description: "#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",
    imageUrl:
      "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
    link: {
      // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
      mobileWebUrl: "https://developers.kakao.com",
      webUrl: "https://developers.kakao.com",
    },
  },
  social: {
    likeCount: 286,
    commentCount: 45,
    sharedCount: 845,
  },
  buttons: [
    {
      title: "웹으로 보기",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        webUrl: "https://developers.kakao.com",
      },
    },
    {
      title: "앱으로 보기",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        webUrl: "https://developers.kakao.com",
      },
    },
  ],
});
