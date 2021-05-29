import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DivItem = styled.div`
    width: 100px;
    height: 20px;
    padding-left: 5px;
    border: 1px solid;
`;

const Info = ({ age, school, name }) => {
    return (
        <Div>
            <DivItem>이름</DivItem>
            <DivItem>{name}</DivItem>
            <DivItem>나이</DivItem>
            <DivItem>{age}</DivItem>
            <DivItem>학교</DivItem>
            <DivItem>{school}</DivItem>
        </Div>
    );
};

export default Info;
