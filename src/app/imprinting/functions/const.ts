import { AccMap } from './type';

export const imprintOptions = [
  '각성',
  '갈증',
  '강령술',
  '강화 무기',
  '강화 방패',
  '결투의 대가',
  '고독한 기사',
  '광기',
  '광전사의 비기',
  '구슬동자',
  '굳은 의지',
  '극의: 체술',
  '급소 타격',
  '기습의 대가',
  '긴급구조',
  '넘치는 교감',
  '달의 소리',
  '달인의 저력',
  '돌격대장',
  '두 번째 동료',
  '마나 효율 증가',
  '마나의 흐름',
  '만개',
  '멈출 수 없는 충동',
  '바리케이드',
  '버스트',
  '번개의 분노',
  '부러진 뼈',
  '분노의 망치',
  '분쇄의 주먹',
  '불굴',
  '사냥의 시간',
  '상급 소환사',
  '선수필승',
  '세맥타통',
  '속전속결',
  '슈퍼 차지',
  '승부사',
  '시선 집중',
  '실드 관통',
  '심판자',
  '아드레날린',
  '아르데타인의 기술',
  '안정된 상태',
  '약자 무시',
  '에테르 포식자',
  '여신의 가호',
  '역천지체',
  '예리한 둔기',
  '오의 강화',
  '오의난무',
  '완벽한 억제',
  '원한',
  '위기 모면',
  '이슬비',
  '일격필살',
  '잔재된 기운',
  '저주받은 인형',
  '전문의',
  '전투 태세',
  '절실한 구원',
  '절정',
  '절제',
  '점화',
  '정기 흡수',
  '정밀 단도',
  '죽음의 습격',
  '중갑 착용',
  '중력 수련',
  '진실된 용맹',
  '진화의 유산',
  '질량 증가',
  '질풍노도',
  '처단자',
  '초심',
  '최대 마나 증가',
  '추진력',
  '축복의 오라',
  '충격 단련',
  '타격의 대가',
  '탈출의 명수',
  '포격 강화',
  '포식자',
  '폭발물 전문가',
  '피스메이커',
  '핸드거너',
  '화력 강화',
  '환류',
  '황제의 칙령',
  '황후의 은총',
  '회귀',
];

export const penaltyOptions = [
  '공격력 감소',
  '공격속도 감소',
  '방어력 감소',
  '이동속도 감소',
];

export const dealOptions = ['치명', '특화', '제압', '신속', '인내', '숙련'];

export const itemNames = [
  '타락한 시간의 목걸이',
  '울부짖는 혼돈의 목걸이',
  '찬란한 구도자의 목걸이',
  '타오르는 의지의 목걸이',
  '타락한 예지의 목걸이',
  '울부짖는 환상의 목걸이',
  '찬란한 집행자의 목걸이',
  '공허한 운명의 목걸이',
  '참혹한 파멸의 목걸이',
  '거룩한 수호자의 목걸이',
  '솟구치는 의지의 목걸이',
  '타락한 시간의 귀걸이',
  '타락한 공간의 귀걸이',
  '울부짖는 혼돈의 귀걸이',
  '울부짖는 영겁의 귀걸이',
  '찬란한 구도자의 귀걸이',
  '찬란한 파멸자의 귀걸이',
  '타오르는 의지의 귀걸이',
  '타오르는 신념의 귀걸이',
  '타락한 예지의 귀걸이',
  '타락한 차원의 귀걸이',
  '울부짖는 환상의 귀걸이',
  '울부짖는 악몽의 귀걸이',
  '찬란한 집행자의 귀걸이',
  '찬란한 순례자의 귀걸이',
  '공허한 운명의 귀걸이',
  '공허한 인연의 귀걸이',
  '참혹한 파멸의 귀걸이',
  '참혹한 종말의 귀걸이',
  '거룩한 수호자의 귀걸이',
  '거룩한 해방자의 귀걸이',
  '솟구치는 의지의 귀걸이',
  '솟구치는 신념의 귀걸이',
  '타락한 시간의 반지',
  '타락한 공간의 반지',
  '울부짖는 혼돈의 반지',
  '울부짖는 영겁의 반지',
  '찬란한 구도자의 반지',
  '찬란한 파멸자의 반지',
  '타오르는 의지의 반지',
  '타오르는 신념의 반지',
  '타락한 예지의 반지',
  '타락한 차원의 반지',
  '울부짖는 환상의 반지',
  '울부짖는 악몽의 반지',
  '찬란한 집행자의 반지',
  '찬란한 순례자의 반지',
  '공허한 운명의 반지',
  '공허한 인연의 반지',
  '참혹한 파멸의 반지',
  '참혹한 종말의 반지',
  '거룩한 수호자의 반지',
  '거룩한 해방자의 반지',
  '솟구치는 의지의 반지',
  '솟구치는 신념의 반지',
];

export const categoryMap = {
  목걸이: 200010,
  귀걸이: 200020,
  반지: 200030,
};

export const gradeMap = {
  전설: 4,
  유물: 5,
  고대: 6,
  전체: null,
};

export const dealOptionMap = {
  치명: 15,
  특화: 16,
  제압: 17,
  신속: 18,
  인내: 19,
  숙련: 20,
};

export const imprintOptionMap = {
  각성: 255,
  갈증: 286,
  강령술: 243,
  '강화 무기': 129,
  '강화 방패': 242,
  '결투의 대가': 288,
  '고독한 기사': 225,
  광기: 125,
  '광전사의 비기': 188,
  구슬동자: 134,
  '굳은 의지': 123,
  '극의: 체술': 190,
  '급소 타격': 142,
  '기습의 대가': 249,
  긴급구조: 302,
  '넘치는 교감': 199,
  '달의 소리': 287,
  '달인의 저력': 238,
  돌격대장: 254,
  '두 번째 동료': 258,
  '마나 효율 증가': 168,
  '마나의 흐름': 251,
  '멈출 수 없는 충동': 281,
  바리케이드: 253,
  버스트: 279,
  '번개의 분노': 246,
  '부러진 뼈': 245,
  '분노의 망치': 196,
  '분쇄의 주먹': 236,
  불굴: 235,
  '사냥의 시간': 290,
  '상급 소환사': 198,
  선수필승: 244,
  세맥타통: 256,
  속전속결: 300,
  '슈퍼 차지': 121,
  승부사: 248,
  '시선 집중': 298,
  '실드 관통': 237,
  심판자: 282,
  아드레날린: 299,
  '아르데타인의 기술': 284,
  '안정된 상태': 111,
  '약자 무시': 107,
  '에테르 포식자': 110,
  '여신의 가호': 239,
  역천지체: 257,
  '예리한 둔기': 141,
  '오의 강화': 127,
  오의난무: 292,
  '완벽한 억제': 280,
  원한: 118,
  '위기 모면': 140,
  일격필살: 291,
  '잔재된 기운': 278,
  '저주받은 인형': 247,
  전문의: 301,
  '전투 태세': 224,
  '절실한 구원': 195,
  절정: 276,
  절제: 277,
  점화: 293,
  '정기 흡수': 109,
  '정밀 단도': 303,
  '죽음의 습격': 259,
  '중갑 착용': 240,
  '중력 수련': 197,
  '진실된 용맹': 194,
  '진화의 유산': 285,
  '질량 증가': 295,
  초심: 189,
  '최대 마나 증가': 167,
  추진력: 296,
  '축복의 오라': 283,
  '충격 단련': 191,
  '타격의 대가': 297,
  '탈출의 명수': 202,
  '포격 강화': 193,
  '폭발물 전문가': 241,
  피스메이커: 289,
  핸드거너: 192,
  '화력 강화': 130,
  환류: 294,
  '황제의 칙령': 201,
  '황후의 은총': 200,
  회귀: 305,
  만개: 306,
  질풍노도: 307,
  이슬비: 308,
  포식자: 309,
  처단자: 310,
};

export const initialAccMap: Record<string, AccMap> = {
  목걸이: {
    category: '목걸이',
    quality: 50,
    dealOption1: ['', 0],
    dealOption2: ['', 0],
    name: '',
    imprintOption1: ['', 0],
    imprintOption2: ['', 0],
    imprintPenalty: ['', 0],
  },
  귀걸이1: {
    category: '귀걸이',
    quality: 50,
    dealOption1: ['', 0],
    name: '',
    imprintOption1: ['', 0],
    imprintOption2: ['', 0],
    imprintPenalty: ['', 0],
  },
  귀걸이2: {
    category: '귀걸이',
    quality: 50,
    dealOption1: ['', 0],
    name: '',
    imprintOption1: ['', 0],
    imprintOption2: ['', 0],
    imprintPenalty: ['', 0],
  },
  반지1: {
    category: '반지',
    quality: 50,
    dealOption1: ['', 0],
    name: '',
    imprintOption1: ['', 0],
    imprintOption2: ['', 0],
    imprintPenalty: ['', 0],
  },
  반지2: {
    category: '반지',
    quality: 50,
    dealOption1: ['', 0],
    name: '',
    imprintOption1: ['', 0],
    imprintOption2: ['', 0],
    imprintPenalty: ['', 0],
  },
};

export const imprintingFormToken = 'imprintingForm_v4';
