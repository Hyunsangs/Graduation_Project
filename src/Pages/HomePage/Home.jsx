import styled from '@emotion/styled';
import Footer from '../../Components/Footer';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const MainHomeContainer = styled.div`
    
`
/* 메인 section1 css */
const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* 가로 중앙 정렬 */
    justify-content: center; /* 세로 중앙 정렬 */
    position: relative;
    width: 100%;
    height: 100vh;
    padding-top: 100px; /* Navbar 높이만큼 상단에 공간 추가 */
    
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('/mainbackground.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.5; /* 배경 이미지에만 투명도 적용 */
        z-index: -1;
    }
`

const HomeTitle = styled.div`
    font-size: 40px;
    position: relative;
    
    margin-bottom: 20px;
`

const SubTitle = styled.div`
    font-size: 20px;
    position: relative;
    margin-bottom: 120px;
`

const StartButton = styled.button`
    height: 50px;
    width: 200px;
        
    font-weight: 700;
    font-size: 1.5em;
    line-height: 1;
    letter-spacing: 0em;
    color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    -webkit-box-align: center;
    align-items: center;
    visibility: visible;
    border-style: none;
    border-width: 1px;
    border-color: rgba(222, 255, 255, 0.25);
    border-radius: 57px;
    opacity: 1;
    animation: 0.9s ease-in-out 0s 1 normal none running fade-in-bottom;
    background: linear-gradient(144deg, rgb(60, 89, 255) 38%, rgb(110, 255, 216) 100%);
    white-space: pre-wrap;
    word-break: break-word;
    cursor: pointer;

    &:hover {
    opacity: 0.95;
    white-space: pre-wrap;
    word-break: break-word;
}
`

  /*  section2 css */
const Section2 = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-color: white;

    .section2_title {
        font-size: 60px;
    }
`

const Section2Container = styled.div`
    width: 100%;
    padding: 100px 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 50px 450px;
    min-width: 1200px; /* or the minimum width you want */
  
    column-gap: 20px;
    row-gap: 20px;
    
    .section2_userCard {
        display: flex;
        flex-direction: column;
        min-width: 280px;
        padding: 20px;
        background-color: #F3F3F3;
        
        img {
                width: 100%;
                height: 70%;
                object-fit: cover;
            }
        .section2_user_information {
            
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 30%;
            

            .section2_user_tag {
                font-size: 30px;
                color: #6a80f7;
            }

            .section2_user_nickname_sharer {
                font-size: 10px;
                text-align: center;
                opacity: 0.5;
            }

            .section2_user_nickname {
                font-size: 20px;
                margin-top: 10px;
            }
        }
        
    }

    
`

const Section2Header = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    grid-column: 1 / 5;
    

    .section2Header_title  {
        font-size: 25px;
    }

    .section2Header_showFriend {
        opacity: 0.5;
        
    }
`

/*  section3 css */
const Section3 = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: #aef19d;

`

const Section3Container = styled.div`
    display: flex;
    width: 100%;
   
    justify-content: space-between;
    align-items: center;
    padding: 100px 50px;

    .section3_img_container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 40%;
        justify-content: center;
        background-image: url('/tagbackground.png');
        object-fit: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 20px;

    }

    .section3_category_container {
        display: flex;
        flex-direction: column;
        margin-right: 40px;
        .section3_content_title{
            font-size: 60px;
            display: flex;
            justify-content: flex-start;
            
            .tag {
                color: #8181f8;
                margin-left: 10px;
            }
        }

        .section3_content_subtitle{
            width: 60%;
            font-size: 20px;
            display: flex;
            justify-content: flex-start;
            padding: 10px;
        }


        .section3_category_container_line {
            padding: 10px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            
            .section3_category {
            
            padding: 10px;
            font-size: 30px;
            background-color: white;
            border: 2px solid #8181f8;
            border-radius: 10px;
            color: #8181f8;
            margin-left: 10px;
            }
        }
        
        
    }

`

/*  section4 css */
const Section4 = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: #9be5d4;

`

const Section4Container = styled.div`
    display: grid;
    padding: 100px 50px;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: 50px 500px;
    grid-gap: 10px 10px;

    .section4_header {
        grid-column: 1 / 4;

        .section4_header_title{
            
            font-size: 40px;
        }
    
   
    }
    .section4_content_container{
            
            background-color: #2a2a2b;
            color: white;
        }
        .section4_content_icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 40%;
        }

        hr {
            margin-bottom: 20px;
        }
        .section4_content_explain {
            display: flex;
            justify-content: center;
            align-items: center;
        }
`




const Home = () => {

    return (
        <MainHomeContainer>
            <Section1>
                <HomeTitle>사진 취향 분석을 통해 나만의 친구를 만나보세요!</HomeTitle>
                <SubTitle>사진 기반으로 나와 취향이 같은 친구를 찾아줍니다.</SubTitle>
                <Link to="/login"><StartButton>시작하기</StartButton></Link>
            </Section1>
            <Section2>
                <Section2Container>
                    <Section2Header>
                        <div className='section2Header_title'># 공유사진</div>
                        <div className='section2Header_showFriend'>자세히 보기<IoIosArrowRoundForward /></div>
                    </Section2Header>
                    { /* 이 부분은 사용자들 정보 불러서 보여주는 곳  */ }
                    <div className='section2_userCard'>
                        <img src='/ride.jpg'>{/*사진 소스 불러오기*/}</img>
                        <div className='section2_user_information'>
                            <div className='section2_user_tag'>#자전거타기</div>
                            <div className='section2_user_nicknameContainer'>
                                <div className='section2_user_nickname_sharer'>공유자</div>
                                <div className='section2_user_nickname'>유현상</div>
                            </div>
                        </div>
                        
                    </div>

                    <div className='section2_userCard'>
                        <img src='/drive.jpg'>{/*사진 소스 불러오기*/}</img>
                        <div className='section2_user_information'>
                            <div className='section2_user_tag'>#드라이브</div>
                            <div className='section2_user_nicknameContainer'>
                                <div className='section2_user_nickname_sharer'>공유자</div>
                                <div className='section2_user_nickname'>성연준</div>
                            </div>
                        </div>
                    </div>

                    <div className='section2_userCard'>
                        <img src='/soccer.jpg'>{/*사진 소스 불러오기*/}</img>
                        <div className='section2_user_information'>
                            <div className='section2_user_tag'>#축구</div>
                            <div className='section2_user_nicknameContainer'>
                                <div className='section2_user_nickname_sharer'>공유자</div>
                                <div className='section2_user_nickname'>백승일</div>
                            </div>
                        </div>
                    </div>

                    <div className='section2_userCard'>
                        <img src='/cat.jpg'>{/*사진 소스 불러오기*/}</img>
                        <div className='section2_user_information'>
                            <div className='section2_user_tag'>#고양이</div>
                            <div className='section2_user_nicknameContainer'>
                                <div className='section2_user_nickname_sharer'>공유자</div>
                                <div className='section2_user_nickname'>박준영</div>
                            </div>
                        </div>
                    </div>

                </Section2Container>
            </Section2>
            
            <Section3>
                <Section3Container>
                    <div className='section3_img_container'>
                    </div>
                    <div className='section3_category_container'>
                        <div className='section3_content_title'>인기<span className="tag">#태그</span>모음</div>
                        <div className='section3_content_subtitle'>현재 인기 태그는?</div>
                        <div className='section3_category_container_line'>
                            <div className='section3_category'># 축구</div>
                            <div className='section3_category'># 고양이</div>
                            <div className='section3_category'># 드라이브</div>
                            <div className='section3_category'># 골프</div>
                        </div>
                        <div className='section3_category_container_line'>
                            <div className='section3_category'># 맛집탐방</div>
                            <div className='section3_category'># 테니스</div>
                            <div className='section3_category'># 전시회</div>
                            <div className='section3_category'># 카페</div>
                        </div>
                    </div>                
                </Section3Container>
            </Section3>

            <Section4>
                <Section4Container>
                    <div className='section4_header'>
                        <div className='section4_header_title'>플랫폼 사용 방법은? OR 플랫폼 사진 분석 방식 설명</div>
                    </div>
                    <div className='section4_content_container'>
                        <div className='section4_content_icon'>아이콘OR 사진</div>
                        <hr />
                        <div className='section4_content_explain'>내용이 들어가 어떠한 분석방법이나 등등</div>

                    </div>
                    <div className='section4_content_container'>
                        <div className='section4_content_icon'>아이콘OR사진</div>
                        <hr />
                        <div className='section4_content_explain'>내용이 들어가 어떠한 분석방법이나 등등</div>
                    </div>
                    <div className='section4_content_container'>
                        <div className='section4_content_icon'>아이콘OR 사진</div>
                        <hr />
                        <div className='section4_content_explain'>내용이 들어가 어떠한 분석방법이나 등등</div>
                    </div>
                </Section4Container>
            </Section4>

            <Footer />
        </MainHomeContainer>
        
            
        
    )
}

export default Home;