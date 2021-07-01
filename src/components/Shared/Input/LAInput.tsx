import { FC } from "react";
import './LAInput.scss';

interface IProps {
    className?: string;
    type?: string;
    value?: string | number;
    placeholder?: string;
    invalid?: boolean;
    disabled?: boolean;
    onChangeText?: any;
}

const LAInput: FC<IProps> = ({
    type = 'text',
    placeholder = 'Enter your text',
    value = '',
    disabled = false,
    invalid = false,
    onChangeText
}) => {
    return(
        <input className={`la-input ${invalid ? 'invalid' : ''}`} type={type} placeholder={placeholder} value={value} onChange={onChangeText} disabled={disabled}/>
    );
}

export default LAInput;