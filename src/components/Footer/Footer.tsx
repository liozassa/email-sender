import { FC } from 'react';
import './Footer.scss';

const Footer: FC = () => {
    const version = process.env.REACT_APP_VERSION;
    const credit = process.env.REACT_APP_CREDIT;
    return (
        <div className="footer">
            <div className="version">
            {version}
            </div>
            <div className="credit">
            {credit}
            </div>
        </div>
    );
}

export default Footer;