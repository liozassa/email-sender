import { FC, useState } from 'react';
import LAButton from '../Shared/button/LAButton';
import LAInput from '../Shared/Input/LAInput';
import './Home.scss';
import * as EmailValidator from 'email-validator';
import { IEmail } from '../../Models/Email.model';
import { sendEmail } from '../../services/Email.service';

interface IStatus {
    sent: boolean | null,
    message: string | null
}

const Home: FC = () => {
    const [statusEmail, setStatusEmail] = useState<IStatus>();
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);

    const emailChangeHandler = (e: any) => {
        setEnteredEmail(e.target.value);
        setEnteredEmailIsValid(true);
        setStatusEmail({
            sent: null,
            message: null
        });
    }

    const formSubmissionHandler = async (enent: any) => {
        enent.preventDefault();

        if ((enteredEmail.trim() === '') || (!EmailValidator.validate(enteredEmail))) {
            setEnteredEmailIsValid(false);
            return;
        }

        const email: IEmail = {
            address: enteredEmail,
            subject: 'Email Test',
            message: 'The email server works amazingly!!!'
        }
        const res = await sendEmail(email);
        if (res.success) {
            setStatusEmail({
                sent: true,
                message: res.message
            });
        } else {
            setStatusEmail({
                sent: false,
                message: 'Failed to send email.'
            });
        }
        
        setEnteredEmail('');
    };

    return (
        <div className="home">
            <div className="title">
                <h1>Send Email</h1>
            </div>
            <form onSubmit={formSubmissionHandler}>
                <div className="form-control">
                    <LAInput type="email" placeholder="Enter your email" onChangeText={emailChangeHandler} value={enteredEmail} invalid={!enteredEmailIsValid}></LAInput>
                    {!enteredEmailIsValid &&  <p className="invalid-msg">Email must not be empty.</p>}
                </div>
                <div className="form-control">
                    <LAButton text="Send Email" type="submit"></LAButton>
                    {statusEmail?.sent &&  <p className={statusEmail.sent ? 'valid-msg' : 'invalid-msg'}>{statusEmail.message}</p>}
                </div>
            </form>
        </div>
    );
}

export default Home;