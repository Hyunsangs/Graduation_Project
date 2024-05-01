import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, setCredentials } from '../slice/userSlice';

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0px 80px;
    height: 60px;
    
    justify-content: space-between;
    align-items: center;
    background-color: white;
    z-index: 1;

    a {
        display: flex;
        justify-content: center;
        min-width: 150px;
        
    }
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
    const isLoggedIn = useSelector(state => state.user.accessToken !== null);
    const dispatch = useDispatch();
   
    useEffect(() => {
        // 애플리케이션 로드 시 로컬 스토리지에서 토큰 확인
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          // 단순히 토큰을 Redux로 복원합니다. 백엔드 유효성 검사가 필요하면 추가 로직을 구현해야 합니다.
          dispatch(setCredentials({ accessToken, user: null }));
        }
      }, [dispatch]);

    const handleLogout = () => {
        dispatch(logoutUser());
    };
    return (
        <NavContainer>
            <Link to="/"><WebTitle></WebTitle></Link>
            <NavbarButtonContainer>
                <Link to="/friend"><FindFriendButton>친구찾기</FindFriendButton></Link>
                <Link to="/mypage"><IoPersonCircleOutline style={{fontSize: '30px'}}/></Link>
                {isLoggedIn ? (
                    <button onClick={handleLogout}>로그아웃</button>
                ) : (
                    <Link to="/login"><LoginButton>로그인</LoginButton></Link>
                )}
                
                
            </NavbarButtonContainer>
        </NavContainer>
    )
}

export default Navbar;