import React from 'react';
import {
  RootContainer,
  Container,
  ScrollView,
  PanelContainer,
  PanelItem,
  ColumnContainer,
  ColumnHeader,
  ColumnBody,
  ColumnFooter} from 'veenbox';

import LeftPanel from './LeftPanel.react.js';
import RightPanel from './RightPanel.react.js';
import MiddlePanel from './MiddlePanel.react.js';

const Layout = ({layout}) =>{

    if(layout==1){
      return (<RootContainer>
          <LeftPanel />
      </RootContainer>)
  }

  if(layout==3){
    return (<RootContainer>
      <PanelContainer>
        <PanelItem width={250}>
          <LeftPanel />
        </PanelItem>
        <PanelItem width={300}>
          <MiddlePanel />
        </PanelItem>
        <PanelItem>
          <RightPanel />
        </PanelItem>
      </PanelContainer>
    </RootContainer>)
  }
}


//Single Columnt
// const Layout = () =>{
//   return (<RootContainer>
//       <LeftPanel />
//   </RootContainer>)
// }

export default Layout;
