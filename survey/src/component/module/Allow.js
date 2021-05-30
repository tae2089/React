import React from 'react';
import styled from 'styled-components';
const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const AllowButton = styled.button`
    margin: 10px;
    width: 200px;
    height: 100px;
    background: skyblue;
    border-radius: 3px;
    border: 1px solid #ffffff;
    color: white;
    font-size: 30px;
    &:hover {
        background-color: white;
        color: black;
    }
`;
const Allow = ({ onSuccess, onFailure }) => {
    return (
        <Div>
            <AllowButton onClick={onSuccess}>1차 합격</AllowButton>
            <AllowButton onClick={onFailure}>탈락</AllowButton>
        </Div>
    );
};

export default Allow;
