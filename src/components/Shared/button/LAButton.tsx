import { FC } from "react";
import './LAButton.scss';

interface IProps {
    className?: string;
    text?: string;
    placeholder?: string;
    disabled?: boolean;
    onPress?: any
}

const LAButton: FC<IProps> = ({
    text = 'click me!',
    disabled = false,
    onPress
}) => {
    return(
        <input className="la-button" type="button" onClick={onPress} disabled={disabled} value={text}/>
    );
}

export default LAButton;