import React from 'react';
import {Avatar } from 'rebass'
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

const SubscriptionView = ({subscription}) => (
  <PanelContainer  style={{
    backgroundColor:'#f4f4f4',
    color:'#333',
    height:50,
    borderBottom:'1px solid #ccc'
  }}>
    <PanelItem valign="center" halign="center" width={60}>
      <Avatar
        circle
        size={32}
        src={subscription.image}
        />
    </PanelItem>
    <PanelItem halign="center">{subscription.title}</PanelItem>
    <PanelItem width={60} halign="center">{subscription.number}</PanelItem>
  </PanelContainer>
)

export default SubscriptionView;
