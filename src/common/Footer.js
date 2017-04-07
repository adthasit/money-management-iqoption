import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            <strong>MM IQ Option </strong>
                            by
                            <a href="http://jgthms.com"> ATSDEV</a>
                        </p>
                        <p>
                            <a className="icon" href="https://github.com/jgthms/bulma">
                                <i className="fa fa-github"></i>
                            </a>
                            <a className="icon" href="https://github.com/jgthms/bulma">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;