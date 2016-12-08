import React from 'react'
import {getRandomWords} from '../../utils';
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


export default class Component extends React.Component {
  render() {
    return (
      <RootContainer style={{
        backgroundColor:'#777',
        padding:30
      }}>
          <Container  style={{
            backgroundColor:'#f4f4f4'}}>
            <PanelContainer>
              <PanelItem width={200}>{getRandomWords(100)}</PanelItem>
              <PanelItem>
                  <ColumnContainer style={{
                    backgroundColor:'lightblue'
                  }}>
                    <ColumnHeader height={100} style={{ backgroundColor:'green' }}>Head</ColumnHeader>
                    <ColumnBody style={{ backgroundColor:'pink' }}>
                      <ScrollView>{getRandomWords(1000)}</ScrollView>
                    </ColumnBody>
                    <ColumnFooter style={{ backgroundColor:'orange' }}>Footer</ColumnFooter>
                  </ColumnContainer>
              </PanelItem>
              <PanelItem>
                <ScrollView style={{
                  backgroundColor:'red'
                }}>{getRandomWords(1000)}</ScrollView>
              </PanelItem>
            </PanelContainer>
          </Container>
      </RootContainer>
    )
  }
}
