import React from 'react';

import styled from 'styled-components';
const Select = styled.select`
    width: 100px;
    height: 35px;
    background: white;
    color: gray;
    padding-left: 5px;
    font-size: 14px;
    border: none;
    margin-left: 10px;
    display: flex;

    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;
const Div = styled.div`
    display: flex;
`;
const SelectBox = ({ onChange }) => {
    return (
        <Div>
            <Select name='selectSurvey' id='selectSurvey' onChange={onChange}>
                <option value='없음'>세션선택</option>
                <option value='분석'>분석</option>
                <option value='시각화'>시각화</option>
                <option value='엔지니어링'>엔지니어링</option>
            </Select>
        </Div>
    );
};

export default SelectBox;
