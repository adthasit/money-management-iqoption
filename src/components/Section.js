import React from 'react';

class Section extends React.Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="heading">
                        <h1 className="title">Name</h1>
                        <h2 className="subtitle">
                            A simple container to divide your page into
                            sections, like the one you're currently reading
                        </h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section;