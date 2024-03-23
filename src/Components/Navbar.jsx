import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { IoPersonCircleOutline } from "react-icons/io5";


const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0px 80px;
    height: 60px;
    margin-right: 20px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    z-index: 1;

`;

const WebTitle = styled.div`
    width: 200px;
    height: 60px;
    background-image: url("/logo.png");
    object-fit: cover;
    background-repeat: no-repeat;
    
    
`
const NavbarButtonContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LoginButton = styled.button`
    display: block;
    font-size: 20px;
    font-weight: bold;
    flex: 1; /* 유연한 크기 조정 */
    margin: 0 5px; /* 버튼 사이의 간격 */

`

const FindFriendButton = styled.button`
    display: block;
    font-size: 20px;
    font-weight: bold;
    flex: 1; /* 유연한 크기 조정 */
    margin: 0 5px; /* 버튼 사이의 간격 */
`

const Navbar = () => {

    return (
        <NavContainer>
            <Link to="/"><WebTitle></WebTitle></Link>
            <NavbarButtonContainer>
                <Link to="/friend"><FindFriendButton>친구찾기</FindFriendButton></Link>
                <Link to="/mypage"><IoPersonCircleOutline style={{fontSize: '30px'}}/></Link>
                <Link to="/login"><LoginButton>로그인</LoginButton></Link>
                
            </NavbarButtonContainer>
        </NavContainer>
    )
}

export default Navbar;