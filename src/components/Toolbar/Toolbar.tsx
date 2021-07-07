import './Toolbar.scss';
import logo from '../../assets/images/logo.svg';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

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
            <div className="send">
            <NavLink className="nav" activeClassName="active" to="/send-email">Send Email</NavLink>
            </div>
            <div className="validation">
            <NavLink className="nav" activeClassName="active" to="/validation-email">Validation Email</NavLink>
            </div>
        </div>
    );
}

export default Toolbar;