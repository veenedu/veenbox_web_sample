import React, {PropTypes} from 'react';
import {getAvatarURI,getRandomWords,getCardImage} from '../../utils';
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


let style= {
  backgroundColor:'#777'
}
export default class Layout extends React.Component {
  render() {
    return (<RootContainer>
        <ColumnContainer>
          <ColumnHeader style={style}>This us header</ColumnHeader>
          <ColumnBody>
            <ScrollView>{getRandomWords(2000)}</ScrollView>
          </ColumnBody>
          <ColumnFooter style={style}>Footer</ColumnFooter>
        </ColumnContainer>
    </RootContainer>);
  }
}
