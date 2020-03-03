import React from 'react';
import ReactDOM from 'react-dom';

import BaseComponent from './base_component.jsx';
import ContentContainer from '../content.jsx';
import { Link } from 'react-router-dom';
import {Routes} from '../constants.jsx';

class About extends BaseComponent {
    render() {
        return (
            <ContentContainer>
                <h1>
                    About
                </h1>
                <div className="center"><Link to={Routes.INDEX}>(click or tap to continue)</Link></div>
            </ContentContainer>
        );
    }
}

export default About;