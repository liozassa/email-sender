import { FC } from "react";
import './LAButton.scss';

interface IProps {
    className?: string;
    text?: string;
    type?: string;
    disabled?: boolean;
    onPress?: any
}

const LAButton: FC<IProps> = ({
    text = 'click me!',
    type = 'button',
    disabled = false,
    onPress
}) => {
    return(
        <input className="la-button" type={type} onClick={onPress} disabled={disabled} value={text}/>
    );
}

export default LAButton;