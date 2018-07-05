import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import { SceneProps } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import React from 'react';

const MyHeader = (props) => {
  const { renderLeft, title, renderRight } = props;

  return (
    <Header>
      <Left>
        {renderLeft(props)}
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      {renderRight(props)}
    </Header>
  );
};

MyHeader.propTypes = {
  ...SceneProps,
  title: PropTypes.string,
  renderLeft: PropTypes.func,
  renderRight: PropTypes.func,
  index: PropTypes.number.isRequired,
};

MyHeader.defaultProps = {
  title: 'Title',
  renderLeft: (sceneProps) => {
    const { index } = sceneProps;

    if (index > 0) {
      return (
        <Button transparent>
          <Icon name="arrow-back" />
        </Button>
      );
    }

    return (
      <Button transparent>
        <Icon name="menu" />
      </Button>
    );
  },
  renderRight: () => (
    <Right />
  ),
};

export default MyHeader;
