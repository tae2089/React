import React from 'react';
import styled from 'styled-components';
const Divide = styled.hr`
    border-top: 3px solid skyblue;
`;
const Divider = () => {
    return (
        <div>
            <Divide />
        </div>
    );
};

export default Divider;
