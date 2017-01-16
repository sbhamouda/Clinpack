import React from 'react';

import * as ReactDOM from "react-dom";
import { Label } from "office-ui-fabric-react/lib/Label";
import {
  
  Pivot,
  PivotItem,
  PivotLinkSize
} from "office-ui-fabric-react/lib";


class AwesomeComponent1 extends React.Component {

  constructor(props) {
    super(props);
   
  }

 

  render() {
    return (
      <div>
         <Pivot linkSize={ PivotLinkSize.large }>
            <PivotItem linkText='My Files'>
              <Label>Pivot #1</Label>
            </PivotItem>
            <PivotItem linkText='Recent'>
              <Label>Pivot #2</Label>
            </PivotItem>
            <PivotItem linkText='Shared with me'>
              <Label>Pivot #3</Label>
            </PivotItem>
        </Pivot>
      </div>
    );
  }

}

export default AwesomeComponent1;

