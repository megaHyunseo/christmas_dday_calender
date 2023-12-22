// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "드디어 12월! 연말만 기다려왔는데 드디어 12월이에요! 자기 지난 1년동안 정말 고생많았아요!!" },
  { "number": 2, "message": "우리 자기 혼자 타지생활하느라 외롭고 힘들었지?.. 내가 이제부터 다 힐링시켜줄게!!" },
  { "number": 3, "message": "자기를 위해서라면 난 뭐든지 할 수 있어!!!" },
  { "number": 4, "message": "벌써 2번째 맞이하는 크리스마스에요! 앞으로 평생 나랑 크리스마스 보내야 해요!!" },
  { "number": 5, "message": "그리고 곧.. 우리 아기들이랑도 같이 크리스마스 보내겠죠? 그럼 우린 세상에서 제일 행복한 가족일 거예요!" },
  { "number": 6, "message": "하지만 알죠..? 언제나 늘 자기가 내 0순위 아기라는 거..ㅎㅎㅎ" },
  { "number": 7, "message": "우리 아기 만나면 내가 찐하게 안아줄거야! 그리고 수고했다고 말해줄거야!!" },
  { "number": 8, "message": "12월은 정말 행복한 달이야..! 왜냐면 장거리가 끝나간다고 생각하니까!! 이제 정말 장거리는 안돼! 크앙" },
  { "number": 9, "message": "우리 24년도에는 알콩달콩 행복한 시간 보내자! 23년도에 못 본 시간만큼 2배로 더 행복하자!" },
  { "number": 10, "message": "내가 포항가게 되면.. 곧 자기한테 첩보 요원 보내서 24시간 감시할거야! 바람피면 안돼!!" },
  { "number": 11, "message": "난 절대절대 바람안펴! 가족이 내 행복이니까! 여보가 내 행복이니까! 난 내 행복을 지킬거야!" },
  { "number": 12, "message": "하지만 여보는 너무 매력쟁이라서 내가 평생 감시할거야! 울 여보 내꺼야!!!" },
  { "number": 13, "message": "얼른 자기랑 결혼하고 싶다. 나 유부녀로 살고 싶어요~ 모세웅 와이프로 살래요~" },
  { "number": 14, "message": "이제 여보도 총각 아니예욧! 내 남편으로 평생 살아줘요..히히" },
  { "number": 15, "message": "자기랑 가족으로 살아가는 날들을 상상하면 너무 행복해져.. 고마워 내여보.." },
  { "number": 16, "message": "12월은 정말 행복한 것 같아! 상상하면서 설렐 수 있다는 것에 감사해!" },
  { "number": 17, "message": "이렇게나 시간이 지나간다는 것도 신기해요..!! 처음에 정말 느리게 갔는데 말이죠.." },
  { "number": 18, "message": "이젠 정말...하루하루가 기다려져요! 자기를 만나는 날만 고대해요!" },
  { "number": 19, "message": "자기를 만나면 나는 행복으로 가득차요! 자기는 내 행복 비타민이에요!" },
  { "number": 20, "message": "내 행복 비타민 주사, 마늘 주사, 태반 주사, 신데렐라 주사.. 이 시대의 링겔남.. 모세웅..." },
  { "number": 21, "message": "여보 너무너무 보고싶어! 이렇게 편지 쓰니까 더 보고싶어졌어요...!" },
  { "number": 22, "message": "여보! 여기까지 읽었으면 23일, 24일은 아직 못열어봐요! ㅎㅎ 내일 열어보세요~!" },
  { "number": 23, "message": "우왓 벌써 23일이다!! 매일매일 설레서 행복한 하루를 보내고 있어요! 자기를 볼 생각에 너무 설레요..! 날 행복하게 해줘서 고마워요!! 나도 자기를 행복하게 해줄게요!" },
  { "number": 24, "message": "드디어 24일!!! 내일이면 여보랑 만날 수 있어요! 보고싶어요! 사랑해요 평생토록!! 나랑 결혼해줘요!!" }
];

