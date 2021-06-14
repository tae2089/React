import { React, useContext, useEffect, useState } from 'react';

import { Select } from 'page/View';
import ShowBox from '../module/ShowBox';
import Divider from '../module/Divider';
import Info from '../module/Info';
import axios from 'axios';
import Allow from '../module/Allow';

const IntroduceContent = () => {
    // 세션 선택 불러오기
    const username = useContext(Select);
    const [question, setQuestion] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
        question8: '',
        question9: '',
        question10: '',
    });

    const [answer, setAnswer] = useState({
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        answer5: '',
        answer6: '',
        answer7: '',
        answer8: '',
        answer9: '',
        answer10: '',
    });

    const [info, setInfo] = useState({
        name: '',
        depertment: '',
        school: '',
        military: '',
    });

    const getInfo = async () => {
        console.log('start getInfo');
        const uri = '/survey/user/' + username;
        console.log(uri);
        try {
            if (username !== 0) {
                const response = await axios.get(uri);
                const data = response.data;
                setInfo({
                    name: data.user.name,
                    school: data.user.school,
                    depertment: data.user.depertment,
                    military: data.user.military,
                });
                const question = data.answer.question;
                setQuestion({
                    question1: question.question1,
                    question2: question.question2,
                    question3: question.question3,
                    question4: question.question4,
                    question5: question.question5,
                    question6: question.question6,
                    question7: question.question7,
                    question8: question.question8,
                    question9: question.question9,
                    question10: question.question10,
                });
                const answer = data.answer;
                setAnswer({
                    answer1: answer.answer1,
                    answer2: answer.answer2,
                    answer3: answer.answer3,
                    answer4: answer.answer4,
                    answer5: answer.answer5,
                    answer6: answer.answer6,
                    answer7: answer.answer7,
                    answer8: answer.answer8,
                    answer9: answer.answer9,
                    answer10: answer.answer10,
                });
                console.log(data);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        console.log('test-----');
        if (username !== '') {
            console.log(username);
            getInfo();
        }
    }, [username]);
    return (
        <div>
            <Info
                name={info.name}
                depertment={info.depertment}
                school={info.school}
                military={info.military}
            />
            <Divider />
            <ShowBox question={question.question1} answer={answer.answer1} />
            <ShowBox question={question.question2} answer={answer.answer2} />
            <ShowBox question={question.question3} answer={answer.answer3} />
            <ShowBox question={question.question4} answer={answer.answer4} />
            <ShowBox question={question.question5} answer={answer.answer5} />
            <ShowBox question={question.question6} answer={answer.answer6} />
            <ShowBox question={question.question7} answer={answer.answer7} />
            <ShowBox question={question.question8} answer={answer.answer8} />
            <ShowBox question={question.question9} answer={answer.answer9} />
            {answer.answer10 !== '' ? (
                <ShowBox
                    question={question.question10}
                    answer={answer.answer10}
                />
            ) : (
                ''
            )}
        </div>
    );
};

export default IntroduceContent;
