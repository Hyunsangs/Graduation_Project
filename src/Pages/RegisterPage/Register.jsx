import styled from '@emotion/styled';
import PitcureModal from '../../Components/PitcureModal';
import {  useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../slice/ModalSlice';
import { useState } from 'react';
import { registerUser } from '../../slice/userSlice';

    export const RegisterContainer = styled.div`
        
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #becdf5;
        height: 100vh;
        
    `;

    export const RegisterForm = styled.form`
        
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        width: 700px;
        max-height: 100vh;
        margin-top: 50px;
        box-shadow: 1px 2px 4px 4px rgba(208, 173, 233, 0.2);
        background-color: white;
        border-radius: 5px;
        padding: 50px 20px; 
        > h1 {
            display: flex;
            justify-content: center;
        }
        > label {
            
            font-size: 20px;
        
        }
    `;

    export const RegisterInput = styled.input`
        width: 100%;
        margin: 20px 0px;
        border: none;
        padding: 10px;
        border-bottom: 2px solid #ccc; 
        outline: none;
        transition: border-bottom 0.3s ease;
        &:focus {
        border-bottom: 2px solid #007bff; 
        }
    `
    export const RegisterButton = styled.button`
        height: 50px;
        width: 100%;
        padding: 10px;
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
    export const ImgUpload = styled.input`
        
        display: flex;
        padding: 20px 0px;
    `

    const ImgSelectButton = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px; 
        font-size: 15px;
        width: 170px;
        height: 50px;
        padding: 10px;
        border-radius: 20px;
        
        cursor: pointer;
        box-shadow: 5px 5px 8px 0px rgba(163, 162, 162, 0.5);

        &:hover{
            background: linear-gradient(144deg, rgb(60, 89, 255) 38%, rgb(110, 255, 216) 100%);
            color: white;
        }
    `

const Register = () => {

    const dispatch = useDispatch()
    const isModalOpen = useSelector((state) => state.modal.isOpen)

    const [ registerFormData, setFormData ] = useState({    
        username: '',
        nickname: '',
        name: '',
        birthdate: '',
        password: '',
        passwordConfirmation: '', // 비밀번호 확인을 위한 상태 추가
        address: '',
        phone: '',
        label: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // 폼의 기본 제출 동작 방지
        // 비밀번호 확인 로직 추가 가능

        if ( registerFormData.password !== registerFormData.passwordConfirmation) {
            alert("비밀번호가 일치하지 않습니다.")
            return;
        }

         // 데이터 정제
         const formDataToSubmit = {
            username: registerFormData.username,
            nickname: registerFormData.nickname,
            name: registerFormData.name,
            birthdate: registerFormData.birthdate,
            password: registerFormData.password,
            address: registerFormData.address,
            phone: registerFormData.phone,
            label: registerFormData.label,
            // 필요한 나머지 필드 추가
        };
        console.log(formDataToSubmit)
        dispatch(registerUser(formDataToSubmit)); // 회원가입 액션 디스패치
    };
    

    


    return (
        <RegisterContainer>
            <RegisterForm onSubmit={handleSubmit}>
                <h1>회원가입</h1>
                <label>아이디</label>
                <RegisterInput 
                name='username'
                type='text'
                required
                placeholder='아이디 입력'
                onChange={handleChange} 
                />
                <label>닉네임</label>
                <RegisterInput 
                name='nickname'
                type='text'
                required
                placeholder='사용하고 싶은 닉네임을 입력'
                onChange={handleChange} 
                />
                <label>이름</label>
                <RegisterInput 
                name='name'
                type='text'
                required
                placeholder='이름 입력'
                onChange={handleChange} 
                />
                <label>생년월일</label>
                <RegisterInput 
                name='birthdate'
                type='date'
                required
                onChange={handleChange} 
                />
                <label>비밀번호</label>
                <RegisterInput 
                name='password'
                type='password'
                required
                placeholder='비밀번호 입력'
                onChange={handleChange} 
                />
                <label>비밀번호 확인</label>
                <RegisterInput 
                name='passwordConfirmation'
                type='password' 
                required
                placeholder='비밀번호를 한번 더 입력 해주세요'
                onChange={handleChange} 
                />
                <label>주소</label>
                <RegisterInput 
                name='address'
                type='text'
                required
                placeholder='주소 입력'
                onChange={handleChange} 
                />
                <label>핸드폰번호</label>
                <RegisterInput 
                name='phone'
                type='text'
                required
                placeholder='핸드폰 번호 입력'
                onChange={handleChange} 
                />
                <label>라벨예시부분</label>
                <RegisterInput 
                name='label'
                type='text'
                required
                placeholder='선택된라벨'
                onChange={handleChange} 
                />
                {/* <label>사진 선택</label>
                <ImgSelectButton onClick={() => dispatch(openModal())}>사진을 추가 하세요</ImgSelectButton>
                 */}
                <RegisterButton type='submit'>회원가입</RegisterButton>
            </RegisterForm>
            {isModalOpen && <PitcureModal />}
        </RegisterContainer>
    );
}

export default Register;