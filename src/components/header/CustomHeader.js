import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

const CustomHeader = ({ left, title, right }) => (
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

CustomHeader.propTypes = {
  title: PropTypes.string,
  left: PropTypes.node,
  right: PropTypes.node,
};

CustomHeader.defaultProps = {
  title: 'Title',
  left: (
    <Button transparent>
      <Icon name="menu" />
    </Button>
  ),
  right: (
    <Right>
      <Button transparent onPress={() => console.log('Custom Header 1')} >
        <Icon name="attach" />
      </Button>
    </Right>
  ),
};

export default CustomHeader;
