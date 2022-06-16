import React, { Dispatch, useEffect, useState, SetStateAction, FunctionComponent } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { RootState } from "../../app/store";
import { paper } from "../../app/paper";
import { gift } from "../../app/gifts";
interface IProps {
  setIsSelect: Dispatch<SetStateAction<boolean>>;
}
const PaperDetail: FunctionComponent<IProps> = (props: IProps) => {
  const selectedPaper: paper = useSelector((state: RootState) => state.paper.selectedPaper);
  const checkGift: number = useSelector((state: RootState) => state.paper.selectedPaper.giftId);
  const gift: gift = useSelector((state: RootState) => state.paper.selectedPaper.gift);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    console.log(checkGift);
    if (checkGift !== undefined && checkGift !== 0) {
      let gift = window.confirm(`동봉된 선물이 있습니다.\n 바로 확인하시겠습니까?`);
      setModalIsOpen(gift);
    }
  }, [checkGift]);

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="container-sm border mt-3">
      <h2>{selectedPaper.nickname}</h2>
      <textarea className="form-control" cols={60} rows={20} name="content" readOnly={true} defaultValue={selectedPaper.content} />
      <div className="mt-3 text-end">
        {gift ? (
          <button type="button" className="btn btn-outline-primary" onClick={() => setModalIsOpen(true)}>
            선물 확인하기
          </button>
        ) : null}

        <button className="btn btn-outline-primary" onClick={() => props.setIsSelect(false)}>
          목록으로
        </button>
      </div>
      {gift ? (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
          <div className="container-sm">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5>선물 확인</h5>
                </div>
                <div className="modal-body">
                  <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className="card-title">{gift.name}</div>
                    <div className="card-text">{gift.price}원</div>
                    <div>{gift.content}</div>
                    <div>{gift.views}</div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>
                    닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default PaperDetail;