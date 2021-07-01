import './Toolbar.scss';
import logo from '../../assets/images/logo.svg';
import { FC } from 'react';

const Toolbar: FC = () => {
    const app_name = process.env.REACT_APP_NAME;
    return (
        <div className="toolbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="app-name">
                {app_name}
            </div>
        </div>
    );
}

export default Toolbar;