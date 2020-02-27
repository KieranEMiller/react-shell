import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import BaseComponent from './base_component.jsx';
import ContentContainer from '../content.jsx';
import { Routes } from '../constants.jsx';

class Index extends BaseComponent {

    navTo(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <ContentContainer>
                <div className="content_row">
                    
                </div>
            </ContentContainer>
        );
    }
}

export default Index;