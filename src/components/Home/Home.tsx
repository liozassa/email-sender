import { FC, useState } from 'react';
import LAButton from '../Shared/button/LAButton';
import LAInput from '../Shared/Input/LAInput';
import './Home.scss';
import * as EmailValidator from 'email-validator';

const Home: FC = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);

    const emailChangeHandler = (e: any) => {
        setEnteredEmail(e.target.value);
        setEnteredEmailIsValid(true);
    }

    const formSubmissionHandler = (enent: any) => {
        enent.preventDefault();

        if ((enteredEmail.trim() === '') || (!EmailValidator.validate(enteredEmail))) {
            setEnteredEmailIsValid(false);
            return;
        }

        sendEmail(enteredEmail);
        
        setEnteredEmail('');
    };

    async function sendEmail(email: string) {
        const response = await fetch(`${process.env.REACT_APP_EMAIL_API}email`, {
            method: 'POST',
            body: JSON.stringify({
                addresses: enteredEmail,
                subject: 'Email Test',
                message: 'The email server works amazingly!!!'
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('The email not sent.');
        }
        const data = await response.json();
        alert(`data ${data}`);
    }

    return (
        <div className="home">
            <div className="title">
                <h1>Send Email</h1>
            </div>
            <form>
                <div className="form-control">
                    <LAInput type="email" placeholder="Enter your email" onChangeText={emailChangeHandler} value={enteredEmail} invalid={!enteredEmailIsValid}></LAInput>
                    {!enteredEmailIsValid &&  <p className="invalid-msg">Email must not be empty.</p>}
                </div>
                <div className="form-control">
                    <LAButton text="Send Email" onPress={formSubmissionHandler}></LAButton>
                </div>
            </form>
        </div>
    );
}

export default Home;