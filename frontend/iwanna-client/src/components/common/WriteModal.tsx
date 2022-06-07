import React, {useState} from 'react';
import {AiOutlineInfoCircle, AiOutlineCloseCircle} from 'react-icons/ai';
import PopConfirmModal from './PopConfirmModal';

interface WriteModalProps {
  isWrite: boolean;
  setIsWrite: React.Dispatch<React.SetStateAction<boolean>>;
}

const WriteModal: React.FC<WriteModalProps> = ({isWrite, setIsWrite}) => {
  const [hide, setHide] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const writeModalCloseHandler = () => {
    setIsWrite(!isWrite);
  };

  const WriteModalSubmitHandler = () => {};

  return (
    <div className="modal_container">
      <form className="modal_write">
        <div className="modal_write_head">
          <div>
            <span>후속 기사 작성</span>
            <AiOutlineInfoCircle
              className="article_list_guide"
              onMouseOver={() => setHide(true)}
              onMouseOut={() => setHide(false)}
            />
            <PopConfirmModal hide={hide} />
          </div>
          <AiOutlineCloseCircle
            className="modal_close_icon"
            onClick={writeModalCloseHandler}
          />
        </div>
        <div className="modal_write_input">
          <input placeholder="URL을 입력해주세요." />
          <button onClick={() => setIsConfirm(!isConfirm)} type="button">
            확인
          </button>
        </div>
        <button
          className={
            isConfirm ? 'button_modal_write clamp' : 'button_modal_write'
          }
        >
          작성하기
        </button>
      </form>
    </div>
  );
};

export default WriteModal;
