import React from 'react';
import ReactDOM from 'react-dom';

import BaseComponent from './base_component.jsx';
import ContentContainer from '../content.jsx';

class About extends BaseComponent {
    render() {
        return (
            <ContentContainer>
                <div className="content_row">
                    <h2>About</h2>
                </div>

                <div className="content_row">
                    <h2>This Site</h2>
                    <p>Built with React and static content running on AWS.</p>
                </div>
            </ContentContainer>
        );
    }
}

export default About;