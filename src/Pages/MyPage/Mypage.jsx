import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
const MyPageContainer = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    width: 100%;
    
`;

const MyInforContainer = styled.div`
    padding: 50px;    
    background-color: #f7f7f7;
    border-radius: 50px;
    
    
`;

const MyProfileContainer = styled.div`
    padding: 30px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    img {
        margin-bottom: 10px;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        object-fit: cover;
    }
`

const MyInforTitle = styled.div`
    font-size: 32px;
    display: flex;
    justify-content: center;
`
const PictureChangeButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px 0px;
`

const PictureChangeButton = styled.button`
    padding: 10px;
    font-size: 28px;
    text-align: center;
    width: 200px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 3px 0px rgba(0, 0, 0, 0.1);
    
`

const MyPictureContainer = styled.div`
    padding: 10px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;

    img {
        width: 300px;
        height: 300px;
        object-fit: cover;
    }
`

const PictureTagContainer = styled.div`
    font-size: 25px;
    display: flex;
    align-items: center;
    margin: 10px 0px;
    height: 60px;
    background-color: white;
    padding: 10px;

    span {
        margin-right: 20px;
    }
    
`

const UserInforFormContainer = styled.div`
    padding: 10px;
    
`
const UserInforDiv = styled.div`
    padding: 10px 0px;
    display: flex;
    align-items: center;
`

const UserInforLabel = styled.label`
    width: 150px;
    
    font-size: 26px;
`
const UserInforChangeInput = styled.input`
    font-size: 18px;
    padding: 10px;
    border: 1px solid grey;
    width: 80%;
    height: 50px;
`

const UserInfoChangeButton = styled.button`
    font-size: 15px;
    position: relative;
    right: 100px;
    width: 60px;
    background-color: #5bb0fb;
    padding: 10px;
    color: white;
    border-radius: 10px;
`

const Mypage = () => {
    
    const userInfo = useSelector(state => state.user.userInfo);

    useEffect(() => {
        console.log('User Info in component:', userInfo);
      }, [userInfo]); // This will log `userInfo` whenever it changes

    return (
        <MyPageContainer>
            <MyInforContainer>
                <MyInforTitle>마이페이지</MyInforTitle>
                
                <MyProfileContainer>
                    <img src='/soccer.jpg' alt="Cat" />
                    <h2>유현상</h2>
                </MyProfileContainer>
                <h2>나의 사진</h2>
                <MyPictureContainer>
                    <img src='/ride.jpg' alt="Cat" />
                    <img src='/cat.jpg' alt="Cat" />
                    <img src='/drive.jpg' alt="Cat" />
                </MyPictureContainer>
                <PictureChangeButtonContainer>
                    <PictureChangeButton>사진 수정</PictureChangeButton>
                </PictureChangeButtonContainer>
                <h2>나의 관심 #태그</h2>
                <PictureTagContainer>
                    <span>#자전거</span>
                    <span>#고양이</span>
                    <span>#드라이브</span>
                </PictureTagContainer>
                <UserInforFormContainer>
                    <h2>기본 정보</h2>
                    <UserInforDiv>
                        <UserInforLabel>닉네임</UserInforLabel>
                        <UserInforChangeInput 
                        
                        />
                        <UserInfoChangeButton>변경</UserInfoChangeButton>
                    </UserInforDiv>
                    <UserInforDiv>
                        <UserInforLabel>비밀번호</UserInforLabel>
                        <UserInforChangeInput 
                        type='password'
                        disabled
                        />
                        <UserInfoChangeButton>변경</UserInfoChangeButton>
                    </UserInforDiv>
                    <UserInforDiv>
                        <UserInforLabel>핸드폰번호</UserInforLabel>
                        <UserInforChangeInput 
                        
                        />
                        <UserInfoChangeButton>변경</UserInfoChangeButton>
                    </UserInforDiv>
                    <UserInforDiv>
                        <UserInforLabel>생일</UserInforLabel>
                        <UserInforChangeInput 
                        type='date'
                        />
                        <UserInfoChangeButton>변경</UserInfoChangeButton>
                    </UserInforDiv>
                </UserInforFormContainer>
            </MyInforContainer>
        </MyPageContainer>
    );
}

export default Mypage;