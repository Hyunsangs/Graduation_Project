import { useState } from "react";
import styled from '@emotion/styled';
import { IoPersonOutline } from "react-icons/io5";
import { TbLock } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../../slice/userSlice";

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #becdf5;
    height: 100vh;
    
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    
    width: 700px;
    margin: 0 auto; 
    box-shadow: 1px 2px 4px 4px rgba(208, 173, 233, 0.2);
    background-color: white;
    border-radius: 5px;
    padding: 50px 50px;
    > h1 {
        display: flex;
        justify-content: center;
    }
`;

export const LoginInputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export const LoginInput = styled.input`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #ccc; 
    outline: none;
    transition: border-bottom 0.3s ease;
    &:focus {
    border-bottom: 2px solid #007bff; 
    }
`

export const SearchPasswordButton = styled.div`
    font-size: 12px;
    opacity: 0.5;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    
    &:hover {
        opacity: 1;
        color: black;
    }
`
export const SignUpButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    
    
`

export const SignUpButton = styled.div`
    opacity: 0.5;
    margin-right: 10px;
`

export const LoginButton = styled.button`
    height: 50px;
    width: 100%;
    margin-top: 30px;
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

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ username, setUsername ] = useState("");
    const [ password, setPassword] = useState("");

    const changeHandler = (e) => {
        const { value, name } = e.target;
        if (name === "username") setUsername(value);
        else if (name === "password") setPassword(value);
    };

   
    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginUser({ username, password }))
            .unwrap()
            .then(() => {
        
                // 로그인 성공 시 홈 페이지로 리다이렉트
                navigate('/');
            })
            .catch(error => {
                if (error.response && error.response.status === 403) {
                    alert("접근이 거부되었습니다. 권한을 확인하세요.");
                } else if (error.response && error.response.status === 404) {
                    alert("서버를 찾을 수 없습니다. 네트워크 연결을 확인하세요.");
                } else {
                    alert("로그인 실패: " + (error.response?.data?.message || "서버 오류가 발생했습니다."));
                }
            });
    };
    return (
        <LoginContainer>
            <LoginForm onSubmit={handleLogin}>
                <h1>Login</h1>
                <LoginInputContainer>
                    <IoPersonOutline style={{fontSize: "25px", marginRight: "5px"}}/>
                    <LoginInput 
                    name="username"
                    type="text"
                    value={username}
                    onChange={changeHandler}
                    required
                    placeholder="아이디 입력"
                    />
                </LoginInputContainer>
                <LoginInputContainer>
                    <TbLock style={{fontSize: "25px", marginRight: "5px", }}/>
                    <LoginInput 
                    name="password"
                    type="password"
                    value={password}
                    onChange={changeHandler}
                    placeholder="비밀번호 입력"
                    required
                    />
                </LoginInputContainer>
                
                
                <LoginButton type="submit">로그인</LoginButton>
                <SignUpButtonContainer>
                    <SignUpButton>아직 계정이 없으신가요?</SignUpButton>
                    <Link to="/register"> Sign Up</Link>
                </SignUpButtonContainer>

                <SearchPasswordButton>비밀번호를 잃어버리셨나요?</SearchPasswordButton>
            </LoginForm>
        </LoginContainer>
    );
}

export default Login;