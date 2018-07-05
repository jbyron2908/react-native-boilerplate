import _ from 'lodash';
import { Body, Left, ListItem, Icon, Text, Right } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';


class CheckboxItem extends Component {
  constructor() {
    super();
    this.state = {
      selected: false,
    };
  }

  componentWillMount() {
    const { defaultValue } = this.props;
    if (defaultValue) this.setState({ selected: true });
  }

  markChecked() {
    const { value, onChange, checkValue } = this.props;
    onChange(_.concat(value, checkValue));
    this.setState({ selected: true });
  }

  markUnchecked() {
    const { value, onChange, checkValue } = this.props;
    onChange(_.remove(value, n => n !== checkValue));
    this.setState({ selected: false });
  }

  toogle() {
    if (this.state.selected) this.markUnchecked();
    else this.markChecked();
  }

  render() {
    const { label } = this.props;
    const { selected } = this.state;

    return (
      <ListItem selected={selected} onPress={() => this.toogle()}>
        <Left>
          <Icon active={selected} name="checkbox" />
        </Left>
        <Body>
          <Text>{label}</Text>
        </Body>
        <Right />
      </ListItem>
    );
  }
}

CheckboxItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.bool,
  checkValue: PropTypes.oneOfType(PropTypes.bool, PropTypes.string),
};

CheckboxItem.defaultProps = {
  defaultValue: true,
  checkValue: true,
};

export default CheckboxItem;
