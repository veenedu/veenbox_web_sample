import React from 'react';
import {RootContainer,ScrollView} from 'veenbox';
import {getRandomWords} from '../../utils';

export default class Layout extends React.Component {

  render() {
    return (<RootContainer style={{
      backgroundColor:'red'
    }}>
      <ScrollView>
        {getRandomWords(3000)}
      </ScrollView>
    </RootContainer>);
  }
}
