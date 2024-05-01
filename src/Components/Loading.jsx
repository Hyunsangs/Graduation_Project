import styled from '@emotion/styled';



export const LoadingText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  
`;

export const LoadingImg = styled.img`
    
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const Loading = () => {

    return (
        <LoadingText>
            로딩중입니다.
            <LoadingImg src='/CircleLoading.gif' />
        </LoadingText>
    )
}

export default Loading