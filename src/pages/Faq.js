import FnqToggle from '../components/FnqToggle';
const Faq =() => {
    return(
        <div className="faq">
            <div className="faq-title">자주 묻는 질문 FAQ</div>
            <p>Link2Survey에 대해 궁금한 점을 물어보세요</p>
            <div className="faq-wrapper">
                  <FnqToggle 
        title="Link2Survey는 어떤 서비스인가요?"
        content="Link2Survey는 양방향 설문조사 커뮤니티로, 설문 요청자와 설문 참여자를 연결해주는 플랫폼입니다. 설문 요청자는 설문조사를 쉽게 배포할 수 있고, 설문 참여자는 다양한 설문에 참여하여 포인트를 적립할 수 있습니다."
      />
            </div>
            <div className="faq-wrapper">
            <FnqToggle 
        title="설문에 참여하면 어떤 보상을 받을 수 있나요? "
        content="설문에 참여하면 포인트가 적립됩니다. 적립된 포인트는 설문에 적극적으로 참여하도록 유도하며, 3,000원 이상 모으면 기프트콘으로 변환할 수 있습니다. 기프트콘은 스타벅스, 편의점 등 다양한 브랜드의 상품권으로 제공됩니다."
      />
            </div>
            <div className="faq-wrapper">
            <FnqToggle 
        title="설문조사 참여 시 개인정보는 안전하게 보호되나요?"
        content="네, Link2Survey는 설문 참여자의 개인정보를 안전하게 보호합니다. 설문 제작자는 설문 참여자의 개인정보를 직접 수집하지 않으며, 모든 개인정보는 Link2Survey에서 안전하게 관리됩니다. 기프티콘 제공 등 필요한 경우에만 개인정보가 안전하게 사용됩니다."
      />
            </div>
            <div className="faq-wrapper">
            <FnqToggle 
        title="설문조사 매칭 기능은 어떻게 작동하나요?"
        content="설문 참여자는 설문에 참여한 후 만족도를 1부터 10까지 평가할 수 있습니다. 이를 바탕으로 Link2Survey는 참여자가 좋아할 만한 설문조사를 추천합니다. 이를 통해 사용자에게 맞춤형 설문조사 경험을 제공하며, 설문 요청자는 더 높은 응답률을 기대할 수 있습니다."
      />
            </div>
        </div>
    )
}

export default Faq;
