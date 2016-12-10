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

import {getAvatarURI,getRandomWords,getCardImage} from '../../utils'

import {InlineForm} from 'rebass'


function addStory(stories,num){
  if(stories.length<num){
    let newStory =  (<div
        style={{
          backgroundColor:'#fff',
          margin:5,
          border:'1px solid #888',
          padding:3,
          borderRadius:3
        }}
        key={stories.length}>
        {getRandomWords(60)}
    </div>)
    return addStory(stories.concat(newStory),num);
  }
  return stories
}
var stories = addStory([],50);

const middlePannel = () => (
    <ColumnContainer style={{
      backgroundColor:'blue'
    }}>
      <ColumnHeader style={{
        backgroundColor:'orange'
      }}>
        <Container style={{
          paddingLeft:5,
          paddingRight:5,
          backgroundColor:'pink'
        }}>
        <InlineForm
          p={0}
          buttonLabel="Search"
          label="InlineForm"
          name="inline_form"
          style={{
            padding:0,
            margin:0
          }}
        />
        </Container>
      </ColumnHeader>
        <ColumnBody style={{
            backgroundColor:'#ccc'
          }}>
          <ScrollView>
            {stories}
          </ScrollView>
        </ColumnBody>
    </ColumnContainer>
)


export default middlePannel;
