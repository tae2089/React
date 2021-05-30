import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin-top: 15px;
    width: 100%;
    height: 50px;
    background: skyblue;
    text-align: center;
`;

const Footer = () => (
    <Div className='footer'>
        © Boaz. 재미로 만들었는데 왜이렇게 하기가 귀찮은 것이지{' '}
    </Div>
);
export default Footer;
