// 앱별 개인정보처리방침 내용. 여기에 slug로 항목이 있는 앱만 /apps/<slug>/privacy/ 페이지가 만들어진다.
// 내용을 바꾸면 updatedAt(시행일)도 함께 바꾼다.
export type PolicySection = { title: string; body: string[] };
export type PrivacyPolicy = { updatedAt: string; intro: string; sections: PolicySection[] };

const CONTACT = "miracleofming@gmail.com";

export const privacyPolicies: Record<string, PrivacyPolicy> = {
  beatcue: {
    updatedAt: "2026년 11월 13일",
    intro:
      "BeatCue(이하 \"앱\")는 인터벌 달리기를 안내하고 기록하는 앱입니다. 이 방침은 앱이 어떤 정보를 다루고, 어디에 보관하는지 설명합니다.",
    sections: [
      {
        title: "1. 수집하는 개인정보",
        body: [
          "앱은 개인정보를 수집하지 않습니다. 회원가입이나 로그인이 없으며, 이름, 이메일, 전화번호처럼 사용자를 식별할 수 있는 정보를 요구하지 않습니다.",
          "앱은 위치 정보를 사용하거나 저장하지 않으며, 건강 데이터(Apple 건강, Health Connect 등)를 읽거나 기록하지 않습니다.",
        ],
      },
      {
        title: "2. 기기에 저장되는 정보",
        body: [
          "사용자가 만든 인터벌 설정(단계 이름, 시간, 반복 횟수)과 운동 기록(날짜, 시각, 완료한 횟수, 운동 시간)은 사용자의 기기 안에만 저장됩니다.",
          "이 정보는 개발자의 서버나 다른 곳으로 전송되지 않으며, 개발자는 이 정보를 볼 수 없습니다. 앱을 삭제하면 함께 삭제됩니다.",
        ],
      },
      {
        title: "3. 제3자 제공과 외부 서비스",
        body: [
          "앱에는 광고, 사용 분석 도구, 외부 서버가 없습니다. 앱은 인터넷 연결 없이 동작하며, 어떤 정보도 제3자에게 제공하거나 판매하지 않습니다.",
        ],
      },
      {
        title: "4. 아동의 개인정보",
        body: ["앱은 누구의 개인정보도 수집하지 않으므로, 만 14세 미만 아동의 개인정보도 수집하지 않습니다."],
      },
      {
        title: "5. 방침의 변경",
        body: [
          "앱의 기능이 바뀌어 다루는 정보가 달라지면 이 방침을 고치고, 이 페이지의 시행일을 바꿔 알립니다.",
        ],
      },
      {
        title: "6. 문의",
        body: [`개인정보와 관련한 문의는 ${CONTACT} 으로 보내 주시기 바랍니다.`],
      },
    ],
  },
};

export function getPrivacyPolicy(slug: string) {
  return privacyPolicies[slug];
}
