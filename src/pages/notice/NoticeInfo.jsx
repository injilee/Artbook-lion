import poster from '../../assets/bologna-childrens-book-fair-poster.jpg';

const NoticeInfo = [
   {
      id: 1,
      section: '공지사항',
      title: '그림책 라이언은 어떤 서비스인가요?',
      content: [
         `안녕하세요. 그림책 라이언입니다. 
그림책 라이언은 그림책을 추천해주는 플랫폼으로, 매월마다 직접 선별한 특별한 그림책을 추천해드리고 있습니다.

그림책 전시 소식도 빠르게 받아볼 수 있으며, 
나만의 독서노트를 작성할 수 있고 별점 평가로 많은 라이언 유저들과 함께 그림책 정보를 공유할 수 있습니다.`,
      ],
      time: '2023.03.30',
   },
   {
      id: 2,
      section: '전시',
      title: '볼로냐 일러스트 원화전 2022',
      content: [
         `운영정보

- 전시기간 : 2023.04.13(목) - 2023.06.25(일) 
- 전시시간 : 10:00 ~ 19:00 (입장마감 18:00) 
- 전시장소 : 예술의전당 한가람미술관 제7전시실
- 휴관일 : 매주 월요일`,
      ],
      imageUrl: poster,
      imageAlt: '볼로냐 일러스트 원화전 2022 포스터',
      url: 'https://www.sac.or.kr/site/main/show/show_view?SN=49110',
      time: '2023.04.01',
   },
   {
      id: 3,
      section: '공지사항',
      title: '커뮤니티 이용 안내',
      content: [
         `안녕하세요. 그림책 라이언입니다. 원활한 커뮤니티 이용을 위해 하단의 안내 사항을 확인해주세요. 

1. 책을 읽은 후 독서노트를 작성하면 커뮤니티에 업로드 됩니다. 
2. 작성한 독서노트는 우측 하단의 "내 프로필"에서 관리할 수 있습니다. 
3. 나만의 특별한 그림책을 소개해주세요 :)`,
      ],
      time: '2023.04.03',
   },
];

export default NoticeInfo;
