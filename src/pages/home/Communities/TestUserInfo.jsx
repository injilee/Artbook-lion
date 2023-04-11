import testUser from '../../../assets/test-user-img.jpg';
import defaultProfile from '../../../assets/lion-img.png';
import sampleBook1 from '../../../assets/sample-book2.png';
import sampleBook2 from '../../../assets/sample-book3.png';
import sampleBook3 from '../../../assets/sample-book4.png';

const testUserInfo = [
   {
      id: 1,
      name: '숭뉴',
      userProfile: testUser,
      bookTitle: '괴물들이 사는 나라',
      bookAthor: '모리스 샌닥',
      grade: '⭐⭐⭐⭐',
      comment:
         '괴상하고 엉뚱한 괴물들이 등장하지만 그 모습 그대로 사랑스럽다. 작가의 상상력과 그림이 주는 매력이 있으니 꼭 읽어보시면 좋겠습니다. ',
      img: sampleBook1,
      time: '2023년 3월 31일',
   },
   {
      id: 2,
      name: '코더블루',
      userProfile: defaultProfile,
      bookTitle: '알사탕',
      bookAthor: '백희나',
      grade: '⭐⭐⭐',
      comment:
         '바빠서 같이 못 놀아준 시간이 많아, 아이와 함께 그림책을 읽었습니다. 비슷하지는 않지만 연기를 하며 읽어주니 재밌어하네요. 추천해주신 덕분에 즐겁게 읽었습니다.',
      img: sampleBook2,
      time: '2023년 4월 2일',
   },
   {
      id: 3,
      name: 'bin_art',
      userProfile: defaultProfile,
      bookTitle: '갈색 곰아, 갈색 곰아...',
      bookAthor: '빌 마틴 주니어(글) · 에릭...',
      grade: '⭐⭐⭐',
      comment:
         '에릭 칼 작가의 그림이 인상 깊어 보게 되었습니다. 그림 공부 하시는 분이면 색채를 유심히 보시면 도움 되겠네요.',
      img: sampleBook3,
      time: '2023년 4월 5일',
   },
];

export default testUserInfo;
