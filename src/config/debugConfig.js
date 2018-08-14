import { YellowBox } from 'react-native';

export default () => {
  if (!__DEV__) return; // eslint-disable-line no-undef

  networkDebug();
  disableYellowBox();
};

const networkDebug = () => {
  global.XMLHttpRequest = global.originalXMLHttpRequest ?
    global.originalXMLHttpRequest :
    global.XMLHttpRequest;
};

const disableYellowBox = () => {
  YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Debugger and device times have drifted by more than 60s',
  ]);
};

