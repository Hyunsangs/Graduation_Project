import styled from "@emotion/styled"
import { useEffect, useCallback } from "react";
import { closeModal } from "../slice/ModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { analyzeImageAsync, setImage } from "../slice/analysisSlice";
import Loading from "./Loading";
// 배경 오버레이 스타일
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); // 어둡게 처리
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

// 모달 컨테이너 스타일
export const PictureModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 700px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 4;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
`;

const ModalTitle = styled.div`
    display: flex;
    padding: 10px 0px 20px 0px ;
    font-size: 25px;
    
`

const ImgUploadButton = styled.input`
    margin-top: 50px;
    padding: 10px;
    font-size: 25px;
    border: 1px solid black;
    border-radius: 10px;
`

const PitcureModal = () => {

    const dispatch = useDispatch(); 

    const { isAnalyzing, result } = useSelector((state) => state.analysis);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          dispatch(setImage(file));
          dispatch(analyzeImageAsync(file));
        }
      };

    // useCallback을 사용하여 closeHandler 함수 메모이제이션
    const closeHandler = useCallback(() => {
      dispatch(closeModal());
    }, [dispatch]); // dispatch를 의존성 배열에 추가

    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          closeHandler();
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      // Cleanup listener when component unmounts
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [closeHandler]); // 이제 closeHandler는 메모이제이션되어, 의존성이 변하지 않는 한 재생성되지 않습니다.

    return (
        <ModalOverlay >
            <PictureModalContainer onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={closeHandler}>X</CloseButton>
                <ModalTitle>사진 분석</ModalTitle>
                {isAnalyzing && <Loading />}
                {result && <p>이 사진은 {result}입니다. 맞나요?</p>}
                {!isAnalyzing && !result && (
                <ImgUploadButton 
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                />
            )}
            </PictureModalContainer>
        </ModalOverlay>
    );
}

export default PitcureModal;