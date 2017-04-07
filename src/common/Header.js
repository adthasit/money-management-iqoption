import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav className="nav container">
                <div className="nav-left">
                    <a className="nav-item">
                        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo"/>
                    </a>
                </div>
                <div className="nav-center">
                    <a className="nav-item">
                        <span className="icon">
                            <i className="fa fa-github"></i>
                        </span>
                    </a>
                    <a className="nav-item">
                        <span className="icon">
                            <i className="fa fa-linkedin"></i>
                        </span>
                    </a>
                </div>
            </nav>
        );
    }
}

export default Header;