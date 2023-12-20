import React from 'react';

interface question {
    id: string;
    question: string;
    answer: string;
}

const FreqQuestions = () => {
    const questions: question[] = [
        {
            id: "1",
            question: "Do you think we have a good lineup?",
            answer: "Idk. I never drank alcohol before the age of 21."
        }, 
        {
            id: "2",
            question: "Will the party be lit af?",
            answer: "yes"
        },
        {
            id: "3",
            question: "How long did this website take you to make",
            answer: "1 hour."
        }
    ]

    return (
        <div style={{ marginTop: '8rem', display: 'flex', alignContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <h3> Frequently Asked Questions:</h3>
            {questions.map((item) => (
                <div id={item.id}>
                    <h3>
                        {item.id}. {item.question}
                    </h3>
                    <h3>
                        {item.answer}
                    </h3>
                </div>
            ))}
            <br />
            <br />
        </div>
    );
}

export default FreqQuestions;

