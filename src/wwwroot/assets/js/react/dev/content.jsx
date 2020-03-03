import React from 'react';

function ContentContainer(props) {
    return(
        <div id="content_wrapper">
            <div id="content" className="center">
                {props.children}
                <div className="clear_both"></div>
            </div>
            <div className="clear_both"></div>
        </div>
    );
}

export default ContentContainer;