import { IEmail } from "../Models/Email.model";

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