import styled from '@emotion/styled';

    export const RegisterContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fde6e6;
        height: 100vh;
        
    `;

    export const RegisterForm = styled.form`
        display: flex;
        flex-direction: column;
        
        width: 600px;
        margin: 0 auto; 
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
        margin-top: 20px;
        margin-bottom: 20px;
        border: none;
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

const Register = () => {

    

    return (
        <RegisterContainer>
            <RegisterForm>
                <h1>회원가입</h1>
                <label>아이디</label>
                <RegisterInput 
                name='userId'
                type='text'
                required
                placeholder='아이디 입력'
                />
                <label>이메일</label>
                <RegisterInput 
                name='email'
                type='text'
                required
                placeholder='이메일 입력'
                />
                <label>비밀번호</label>
                <RegisterInput 
                name='password'
                type='password'
                required
                placeholder='비밀번호 입력'
                />
                <label>비밀번호 확인</label>
                <RegisterInput 
                name='password'
                type='password'
                required
                placeholder='비밀번호 확인'
                />               
                <RegisterButton type='submit'>회원가입</RegisterButton>
            </RegisterForm>
        </RegisterContainer>
    );
}

export default Register;