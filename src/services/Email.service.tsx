import { IEmail } from "../Models/IEmail.model";
import { IEmailVerification } from "../Models/IEmailVerification.model";

export const sendEmail = async (email: IEmail) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_EMAIL_API}email`, {
            method: 'POST',
            body: JSON.stringify({
                address: email.address,
                subject: email.subject,
                message: email.message
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('The email not sent.');
        }
        return await response.json();   
    } catch (error) {
        return {
            success: false
        }
    }
}

export const sendActivationEmail = async (email_verification: IEmailVerification) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_EMAIL_API}email/activation`, {
            method: 'POST',
            body: JSON.stringify({
                email_verification
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('The email not sent.');
        }
        console.log(`response ${JSON.stringify(response.json())}`);
        return await response.json();   
    } catch (error) {
        return {
            success: false
        }
    }
}