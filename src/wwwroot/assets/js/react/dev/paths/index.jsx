import React from 'react';
import BaseComponent from './base_component.jsx';
import ContentContainer from '../content.jsx';
import { Link } from 'react-router-dom';
import {Routes} from '../constants.jsx';

class Index extends BaseComponent {

    navTo(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <ContentContainer>
                <h1>
                    Imagine a world...
                </h1>
                <div className="center"><Link to={Routes.ABOUT}>(click or tap to continue)</Link></div>
            </ContentContainer>
        );
    }
}

export default Index;