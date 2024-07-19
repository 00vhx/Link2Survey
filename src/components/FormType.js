import React, { useContext  } from 'react';
import { FormTypeContext } from '../pages/creator/CreatePage';
import RatingComponent from './RatingComponent';
import YesNoComponent from './YesNoComponent';
import PictureComponent from './PictureComponent';
import TextInputComponent from './TextInputComponent';
const FormType = () => {
    const { addComponent } = useContext(FormTypeContext);

  return (
    <div className="form-type-sidebar">
        <div className="type-box text" onClick={() => addComponent(TextInputComponent)}>
            <div className="title">텍스트</div>
            <div className="img"><img src="/icon/text.svg" /></div>
        </div>
        <div className="type-box mupltiple">
            <div className="title">객관식</div>
            <div className="img"><img src="/icon/multiple.svg" /></div>
        </div>
        <div className="type-box multi-choice">
            <div className="title">다중선택</div>
            <div className="img"><img src="/icon/multi-choice.svg" /></div>
        </div>
        <div className="type-box picture" onClick={() => addComponent(PictureComponent)}>
            <div className="title">그림선택</div>
            <div className="img"><img src="/icon/picture.svg" /></div>
        </div>
        <div className="type-box yesno" onClick={() => addComponent(YesNoComponent)}>
            <div className="title">예/아니오</div>
            <div className="img"><img src="/icon/yesno.svg" /></div>
        </div>
      <div className="form-type-box" onClick={() => addComponent(RatingComponent)}>
        <div className="title">선택적 척도</div>
        <div className="img"><img src="/icon/choice.svg" alt="choice icon" /></div>
      </div>
    </div>
  );
};


export default FormType;
