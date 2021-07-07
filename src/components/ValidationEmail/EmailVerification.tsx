import { FC, useState } from 'react';
import LAButton from '../Shared/button/LAButton';
import LAInput from '../Shared/Input/LAInput';
import './EmailVerification.scss';
import * as EmailValidator from 'email-validator';
import { sendActivationEmail } from '../../services/Email.service';
import { IEmailVerification } from '../../Models/IEmailVerification.model';

interface IStatus {
    sent: boolean | null,
    validation: boolean | null,
    message: string | null
}

const EmailVerification: FC = () => {
    const [statusEmail, setStatusEmail] = useState<IStatus>();
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);

    const emailChangeHandler = (e: any) => {
        setEnteredEmail(e.target.value);
        setEnteredEmailIsValid(true);
        setStatusEmail({
            sent: null,
            validation: null,
            message: null
        });
    }

    const formSubmissionHandler = async (enent: any) => {
        enent.preventDefault();

        if ((enteredEmail.trim() === '') || (!EmailValidator.validate(enteredEmail))) {
            setEnteredEmailIsValid(false);
            return;
        }

        const email_verification: IEmailVerification = {
            address: enteredEmail,
            secret: Math.floor(100000 + Math.random() * 900000),
            activated: false

        }


        const res = await sendActivationEmail(email_verification);
        if (res.success) {
            setStatusEmail({
                sent: true,
                validation: null,
                message: res.message
            });
        } else {
            setStatusEmail({
                sent: false,
                validation: null,
                message: 'Failed to send email.'
            });
        }
        
        setEnteredEmail('');
    };

    return (
        <div>
            <div className="title">
                <h1>Validation Email</h1>
            </div>
            <form onSubmit={formSubmissionHandler}>
                <div className="form-control">
                    <LAInput type="email" placeholder="Enter your email" onChangeText={emailChangeHandler} value={enteredEmail} invalid={!enteredEmailIsValid}></LAInput>
                    {!enteredEmailIsValid &&  <p className="invalid-msg">Email must not be empty.</p>}
                </div>
                {statusEmail?.sent && statusEmail.validation && <div className="form-control">
                    <LAInput type="email" placeholder="Enter your email" onChangeText={emailChangeHandler} value={enteredEmail} invalid={!enteredEmailIsValid}></LAInput>
                    {!enteredEmailIsValid &&  <p className="invalid-msg">Email must not be empty.</p>}
                </div>}
                <div className="form-control">
                    <LAButton text="Send Validation Email" type="submit"></LAButton>
                    {statusEmail?.sent &&  <p className={statusEmail.sent ? 'valid-msg' : 'invalid-msg'}>{statusEmail.message}</p>}
                </div>
            </form>
        </div>
    );
}

export default EmailVerification;