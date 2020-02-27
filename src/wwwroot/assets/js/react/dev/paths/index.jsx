import React from 'react';
import BaseComponent from './base_component.jsx';
import ContentContainer from '../content.jsx';

class Index extends BaseComponent {

    navTo(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <ContentContainer>
                <div className="content_row">
                    blah blah

                    this is a test of the thasdf



                </div>
            </ContentContainer>
        );
    }
}

export default Index;