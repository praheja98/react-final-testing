import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ModalGroup from './ModalGroup.js';
const appRoot = document.getElementById('root');

class Test extends Component {

    constructor(props) {
        super(props);
    }


    render() {
       return (
           <div>

               {this.props.children}
           </div>
        
       )
    }




}
export default Test;