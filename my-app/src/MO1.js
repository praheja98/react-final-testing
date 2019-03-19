import MG1 from './MG1.js';
import React from 'react';

const MO1 = props => {
    const {children,...rest} = props 

    return (
        <MG1>
            <Modal {...rest}>
                {children}
            </Modal>
        </MG1>

    )


}

export default MO1;