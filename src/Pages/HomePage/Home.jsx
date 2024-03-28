import styled from '@emotion/styled';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const MainHomeContainer = styled.div`
    
`
/* --------------- 메인 section1 css --------------- */

const fadeIn = `
  @keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(-100%);
      }
    
    100%{
        opacity: 1;
        transform: translateY(0%);
    }
    
  }
`;

const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* 가로 중앙 정렬 */
    justify-content: center; /* 세로 중앙 정렬 */
    position: relative;
    width: 100%;
    height: 100vh;
    padding-top: 100px; /* Navbar 높이만큼 상단에 공간 추가 */
    
    
    .webTitle {
        color: #8181f8;
    }

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
    ${fadeIn}
    animation: fadeIn 2s ease-out forwards; // Reuse the animation with ease-in-out
    font-size: 20px;
    position: relative;// Use the animation
    font-size: 40px;
    position: relative;
    margin-bottom: 20px;
`;

const SubTitle = styled.div`
    ${fadeIn}
    animation: fadeIn 2s ease-out forwards; // Reuse the animation
    font-size: 20px;
    position: relative;
    margin-bottom: 120px;
`;

const StartButton = styled.button`
    ${fadeIn}
    animation: fadeIn 2.5s ease-out forwards; 
    height: 50px;
    width: 200px;
    font-weight: 700;
    font-size: 1.5em;
    line-height: 1;
    letter-spacing: 0em;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: none;
    border-radius: 57px;
    background: linear-gradient(144deg, rgb(60, 89, 255) 38%, rgb(110, 255, 216) 100%);
    cursor: pointer;

    &:hover {
        opacity: 0.95;
        
    }

    
`;

  /*---------------   section2 css  ------------------ */
const fadeInUp = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;


const Section2 = styled.div`
    padding: 20px;
    font-size: 40px;
    flex-direction: column;
    display: flex;
    width: 100%;
    
    .section2Title {
        padding: 10px;
        color: #8181f8;;
    }
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Adjust '250px' to the minimum width you want for your images */
    grid-auto-rows: 200px; /* This sets a minimum row height */
    grid-auto-flow: dense; /* This tells the grid to fill in any holes in the grid */
    grid-gap: 20px;
    padding: 20px;
    background: #f5f5f5;
`;

const GridItem = styled.div`
    opacity: 0; // 초기 상태
    grid-row-end: span 1;

    &.wide {  
        grid-column-end: span 2 ; 
        grid-row-end: span 2; 
    }

    &.tall {
        grid-column-end: span 1;
        grid-row-end: span 2; 
    }

    &.side {
        grid-column-end: span 2;
        grid-row-end: span 1;
    }

    &.animate {
        ${fadeInUp}
        animation: fadeInUp 1s ease-out forwards;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10%;
    }
`;


/* ---------------  section3 css ---------------  */
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
const CategoryRow = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    ${fadeInUp}
    opacity: 0; // 초기 상태, 애니메이션 시작 전

    &.animate {
        animation: fadeInUp 1s ease-out forwards;
    }
`;

const Category = styled.div`
    
    padding: 10px;
    font-size: 30px;
    background-color: white;
    border: 2px solid #8181f8;
    border-radius: 10px;
    color: #8181f8;
    margin-left: 10px;
    
`;


/* ---------------  section4 css---------------  */

const slideInLeft = `
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
`;

const slideInRight = `
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
`;



const Section4 = styled.div`
    display: flex;
    
    position: relative; /* 이 줄을 추가하세요 */
    width: 100%;
    height: 100%;
   
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('/section4Bg.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.5; /* 배경 이미지에만 투명도 적용 */
        z-index: -1;
    }
`

const Section4Container = styled.div`
    
    padding: 50px 250px;
    width: 100%;
    
    

    .explainContainer {
    
       display: flex;
       justify-content: space-around;
        width: 100%;
        margin-top: 100px;
        
        ${slideInLeft}
        ${slideInRight}
        .left-animate {
            animation: slideInLeft 1s ease-out forwards;
            opacity: 1;
        }
        .right-animate {
            animation: slideInRight 1s ease-out forwards;
            opacity: 1;
        }
  
        .explainContainer_img1 {
            border-radius: 10%;
            background-image: url('/explainImg.webp');
            justify-self: center;
            width: 450px;
            height: 350px;
            background-size: cover;
            background-repeat: no-repeat;
            opacity: 0;
        }
        .explainContainer_img2 {
            border-radius: 10%;
            background-image: url('/explainImg2.webp');
            width: 450px;
            height: 350px;
            display: flex;
            justify-self: center;
            background-size: cover;
            background-repeat: no-repeat;
            opacity: 0;
        }

        .explainContainer_img3 {
            border-radius: 10%;
            background-image: url('/explainImg3.webp');
            width: 450px;
            height: 350px;
            justify-self: center;
            background-size: cover;
            background-repeat: no-repeat;
            opacity: 0;
        }

        .explainContanier_explain {
            border-radius: 10%;
            font-size: 20px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            width: 350px;
            height: 350px;
            color: #41433d;
            display: flex;
            justify-self: center;
            align-self: center;
            background-color: white;
            opacity: 0;

            .explain_title {
                color: #85b8e5;
                font-size: 40px;
                margin-bottom: 30px;

                .emoji {
                    width: 40px;
                }
            }
        }
    } 
       
`




const Home = () => {
    const section2Ref = useRef(null); // Section2를 위한 ref 생성
    const section3Ref = useRef(null); // Section3를 위한 ref 생성
    
     /* section3 애니메이션 */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 1 }
        );
    
        document.querySelectorAll('.categoryRow').forEach(row => {
            observer.observe(row);
        });
    
        // Cleanup
        return () => {
            document.querySelectorAll('.categoryRow').forEach(row => {
                observer.unobserve(row);
            });
        };
    }, []);


    
     /* section2 애니메이션 */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate'); // 애니메이션 적용을 위한 클래스 추가
                        observer.unobserve(entry.target); // 관찰 중단
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );
    
        const items = section2Ref.current.querySelectorAll('.gridItem');
    
        items.forEach(item => {
            observer.observe(item);
        });
    
        return () => {
            items.forEach(item => {
                observer.unobserve(item);
            });
        };
    }, []);
    
    /* section4 애니메이션 */
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add(entry.target.dataset.animate);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });
    
        document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
      }, []);
    

    return (
        <MainHomeContainer>
            <Section1>
                <HomeTitle><span className='webTitle'>RelPho</span>가 취향을 분석해서 친구를 소개해드립니다!</HomeTitle>
                <SubTitle>사진을 바탕으로 취향이 맞는 친구를 찾아줍니다.</SubTitle>
                <Link to="/login"><StartButton>시작하기</StartButton></Link>
            </Section1>
            
            <Section2 ref={section2Ref}>
                <div className='section2Title'>#  인기 사진</div>
                <GridContainer>
                    <GridItem className='gridItem wide'>
                        <img src='/cat.jpg' alt="Cat" />
                    </GridItem>
                    <GridItem className='gridItem'>
                        <img src='/drive.jpg' />
                    </GridItem>
                    <GridItem  className='gridItem'>
                        <img src='/soccer.jpg' />
                    </GridItem>
                    <GridItem className='gridItem wide'>
                        <img src='/explainImg3.webp'/>
                    </GridItem>
                    <GridItem className='gridItem'>
                        <img src='/tagbackground.png' />
                    </GridItem>
                    <GridItem className='gridItem tall'>
                        <img src='/drive.jpg' />
                    </GridItem>
                    <GridItem className='gridItem tall'>
                        <img src='/explainImg.webp' />
                    </GridItem>
                    <GridItem className='gridItem'>
                        <img src='/explainImg2.webp' />
                    </GridItem>
                    <GridItem className='gridItem '>
                        <img src='/cat.jpg' />
                    </GridItem>
                    <GridItem className='gridItem side'>
                        <img src='/drive.jpg' />
                    </GridItem>
                    <GridItem className='gridItem '>
                        <img src='/soccer.jpg' />
                    </GridItem>

                </GridContainer>
            </Section2>
            
            <Section3 ref={section3Ref}>
                <Section3Container>
                    <div className='section3_img_container'>
                    </div>
                    <div className='section3_category_container'>
                        <div className='section3_content_title'>인기<span className="tag">#태그</span>모음</div>
                        <div className='section3_content_subtitle'>현재 인기 태그는?</div>
                        <CategoryRow className="categoryRow">
                            <Category># 축구</Category>
                            <Category># 고양이</Category>
                            <Category># 드라이브</Category>
                            <Category># 골프</Category>
                        </CategoryRow>
                        <CategoryRow className="categoryRow">
                            <Category># 맛집탐방</Category>
                            <Category># 테니스</Category>
                            <Category># 전시회</Category>
                            <Category># 카페</Category>
                        </CategoryRow>
                    </div>                
                </Section3Container>
            </Section3>

            <Section4>
                <Section4Container>
                    <div className='explainContainer'>
                        <div className='explainContainer_img1'  data-animate="left-animate" />
                        <div className='explainContanier_explain' data-animate="right-animate">
                        <span className='explain_title'><img className='emoji' src='/ai.png' /> 사진 분석 인공지능</span>
                        당사 플랫폼은 사진 분석 알고리즘을 사용하여 학습 시켜 업로드된 사진을 분석하고 
                        개인 스타일과 선호도를 반영하는 고유한 취향 태그를 식별합니다. 
                        이러한 접근 방식은 맞춤형 경험을 보장하여 바슷한 취미의 다른 친구를
                        연결 시키도록 만들어 줍니다.</div>
                        </div>
                    <div className='explainContainer'>
                        <div className='explainContanier_explain' data-animate="left-animate">
                        <span className='explain_title'><img className='emoji' src='/network.png'/> 오직 사진으로 친구 찾기!</span>
                        스마트 매치메이킹
                        시스템을 통해 같은 취미를 가진 
                        사람들의 사진을 구경하세요. 취향 태그를 비교함으로써 우리 플랫폼은 잠재적인
                        연결을 식별하고 비슷한 취향과 취향을 가진 사용자 간의 의미 있는 상호 작용과 
                        협력을 촉진합니다.</div>
                        <div className='explainContainer_img2' data-animate="right-animate" />
                    </div>
                    <div className='explainContainer'>
                        <div className='explainContainer_img3' data-animate="left-animate"/>
                        <div className='explainContanier_explain' data-animate="right-animate">
                        <span className='explain_title'><img className='emoji' src='/person.png'/> 사진 공유하는 재미</span>
                        사진을 다른 사람들에게 보여주면서, 자랑할 수 있고 공감할 수 있습니다.
                        다양한 사진을 구경하고 정보를 나눠서 RelPho에서 새로운 친구를
                        만들어보세요! 
                        </div>
                    </div>
                    
                </Section4Container>
            </Section4>

            <Footer />
        </MainHomeContainer>
        
            
        
    )
}

export default Home;