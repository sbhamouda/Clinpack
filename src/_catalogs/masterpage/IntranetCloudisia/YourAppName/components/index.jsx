import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import AwesomeComponent1 from './AwesomeComponent1.jsx';

import * as ReactDOM from "react-dom";
import { Label } from "office-ui-fabric-react/lib/Label";
import {
  
  Pivot,
  PivotItem,
  PivotLinkSize
} from "office-ui-fabric-react/lib";


//this is the part for the app
class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>


        


      
        <AwesomeComponent />
        <AwesomeComponent1 />
        
      </div>
    );

    
  }
}

render(<App/>, document.getElementById('app'));


