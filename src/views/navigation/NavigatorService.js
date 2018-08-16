import { NavigationActions } from 'react-navigation';

let navigator;

function setNavigator(navigatorRef) {
  console.log('setNavigator');
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  console.log('navigate');
  navigator.dispatch(NavigationActions.navigate({
    routeName,
    params,
  }));
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setNavigator,
};
