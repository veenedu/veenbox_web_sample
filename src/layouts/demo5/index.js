import React from 'react';

import {
  RootContainer,
  PanelContainer,
  PanelItem
} from 'veenbox';

import LeftPanel from  './leftPanel.react';
import MiddlePanel from  './middlePanel.react';
import RightPanel from  './rightPanel.react';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle= this.handleToggle.bind(this);
    this.state= {
      drawerOpen:false,
      overlayOpen:false,
      switchChecked:false
    }
  }

  handleToggle(prop){
    var  o= {}
    o[prop]= !this.state[prop];
    this.setState(o);
  }

  render() {
    return (<RootContainer style={{
      backgroundColor:'#333',
      color:'#fff',
    }}>
                <div style={{
                  margin:10,
                  height:600,
                  with:800,
                  backgroundColor:'#777'
                }}>

                  <PanelContainer>
                    <PanelItem style={{
                        backgroundColor:'#fff',
                        color:'#444',
                        width:250
                      }}>
                       <LeftPanel
                          drawerOpen={this.state.drawerOpen}
                          overlayOpen={this.state.overlayOpen}
                          switchChecked={this.state.switchChecked}
                          handleToggleDrawer={()=> this.handleToggle('drawerOpen')}
                          handleToggleOverlay={()=> this.handleToggle('overlayOpen')}
                          handleSwitchChecked={()=> this.handleToggle('switchChecked')}
                       />
                    </PanelItem>


                    <PanelItem style={{backgroundColor:'#fff',color:'#444',width:400}}>
                      <MiddlePanel />
                    </PanelItem>


                    <PanelItem style={{
                      backgroundColor:'#777',
                      padding:0
                    }}>
                      <RightPanel />
                    </PanelItem>

                  </PanelContainer>
                </div>
              </RootContainer>);
  }
}
