import styled from "@emotion/styled";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
export const FriendPageContainer = styled.div`
    padding: 50px 100px;

    h1 {
        padding: 25px 0px;
    }
`
export const HeaderContainer = styled.div`
    padding: 0px 10px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 0.4fr 1fr;
    grid-column-gap: 50px;
`

export const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
`

export const SideBar = styled.div`
    padding: 20px;
    height: 350px;
    background-color: #fdf6f6;
`

export const SearchBar = styled.input`
    font-size: 28px;
    padding: 10px 70px;
    border-radius: 10px;
    border: none;
    width: 100%;
    height: 50px;
    background-color: #f1f0f0;
`

export const TagLabel = styled.label`
    padding: 20px;
    font-size: 26px;
`

export const PictureContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    padding: 20px;
    
    img {
        width: 100%;  // 너비를 100%로 설정하여 부모 컨테이너에 맞춤
        height: 350px;
        object-fit: fill; // 이미지가 컨테이너에 꽉 차게 조정되도록 설정
    }
`

export const UserPictureContainer = styled.div`
    display: flex;
    flex-direction: column;

    .user {
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            margin-right: 10px;
            height: 50px;
            width: 50px;
            border-radius: 50%;
        }
    }

`





export const User = styled.div`
    
    .user_name{
        font-size: 28px;
        display: flex;
        align-items: center;
    }
    .user_profile {
            margin-right: 10px;
            height: 50px;
            width: 50px;
            border-radius: 50%;
        }
`

export const Griditem = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    padding: 20px;
    
    img {
        width: 100%;  // 너비를 100%로 설정하여 부모 컨테이너에 맞춤
        height: 350px;
        object-fit: fill; // 이미지가 컨테이너에 꽉 차게 조정되도록 설정
    }
    
    
`

export const GridItem2 = styled.div`
    
    h1{
        display: flex;
        justify-content: center;
        color: #8181f8;
    }
    
`
const Friend = () => {
    return (
        <FriendPageContainer>
            <HeaderContainer>
                <h1>친구 찾기</h1>
                <h3>태그 관련순 <IoIosArrowDown style={{fontSize: "19px"}}/></h3>
            </HeaderContainer>
            <GridContainer>
                <SideBar>
                    <h2>카테고리</h2>
                    <hr />
                </SideBar>
                <MainContainer>
                    <div>
                        <SearchBar
                        type="text"
                        placeholder="검색어를 입력하세요."
                        />
                        <IoSearch style={{position: "relative", fontSize: '34px', color: "black", bottom: "43px", left: "15px"} } />
                    </div>
                    <User>
                        <div className="user_name">
                            <img className='user_profile'src='/soccer.jpg' alt="Cat" />
                            <h3>성연준</h3>
                        </div>
                        <Griditem>
                            <GridItem2>
                                <img src='/drive.jpg' alt="Cat" />
                                <h1>#드라이브</h1> 
                            </GridItem2>
                            <GridItem2>
                                <img src='/soccer.jpg' alt="Cat" />
                                <h1>#축구</h1>
                            </GridItem2>
                            <GridItem2>
                                <img src='/soccer.jpg' alt="Cat" />
                                <h1>#고양이</h1>
                            </GridItem2>
                        </Griditem>
                    </User> 
                   
                    <hr />
                    <TagLabel>#드라이브</TagLabel>
                    <PictureContainer>
                        <UserPictureContainer>
                            <img src='/drive.jpg' alt="Cat" /> 
                            <div className="user">
                                <img src='/soccer.jpg' alt="Cat" />
                                <h3>성연준</h3>
                            </div>
                        </UserPictureContainer>
                        <UserPictureContainer>
                            <img src='/drive.jpg' alt="Cat" /> 
                            <div className="user">
                                <img src='/soccer.jpg' alt="Cat" />
                                <h3>성연준</h3>
                            </div>
                        </UserPictureContainer>
                        <UserPictureContainer>
                            <img src='/drive.jpg' alt="Cat" /> 
                            <div className="user">
                                <img src='/soccer.jpg' alt="Cat" />
                                <h3>성연준</h3>
                            </div>
                        </UserPictureContainer>
                    </PictureContainer>
                    <hr />
                    <TagLabel>#고양이</TagLabel>
                    <PictureContainer>
                        <UserPictureContainer>
                            <img src='/cat.jpg' alt="Cat" />
                            <div className="user">
                                <img src='/soccer.jpg' alt="Cat" />
                                <h3>백승일</h3>
                            </div>
                        </UserPictureContainer>
                        <UserPictureContainer>
                            <img src='/cat.jpg' alt="Cat" />
                            <div className="user">
                                <img src='/soccer.jpg' alt="Cat" />
                                <h3>백승일</h3>
                            </div>
                        </UserPictureContainer>
                        <UserPictureContainer>
                            <img src='/cat.jpg' alt="Cat" />
                            <div className="user">
                                <img src='/soccer.jpg' alt="Cat" />
                                <h3>백승일</h3>
                            </div>
                        </UserPictureContainer>
                    </PictureContainer>
                    <hr />
                </MainContainer>
            </GridContainer>
        </FriendPageContainer>
    )
}

export default Friend;