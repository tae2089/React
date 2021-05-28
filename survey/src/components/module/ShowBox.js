import React from 'react';
import 'components/css/ShowBox.css';
const ShowBox = ({ question, answer }) => {
    return (
        <div class='test'>
            <h1>{question}</h1>
            <div class='box'>
                <div class='show__answer'>{answer}</div>
            </div>
        </div>
    );
};

export default ShowBox;
