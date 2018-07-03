import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

const MyHeader = ({ left, title, right }) => (
  <Header>
    <Left>
      {left}
    </Left>
    <Body>
      <Title>{title}</Title>
    </Body>
    {right}
  </Header>
);

MyHeader.propTypes = {
  title: PropTypes.string,
  left: PropTypes.node,
  right: PropTypes.node,
};

MyHeader.defaultProps = {
  title: 'Title',
  left: (
    <Button transparent>
      <Icon name="menu" />
    </Button>
  ),
  right: (
    <Right>
      <Button transparent onPress={() => console.log('Right Button 1')} >
        <Icon name="attach" />
      </Button>
      <Button transparent onPress={() => console.log('Right Button 2')}>
        <Icon name="add-circle" style={{ color: 'red' }} />
      </Button>
    </Right>
  ),
};

export default MyHeader;
