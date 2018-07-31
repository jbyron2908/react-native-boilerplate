import React from 'react';
import { Drawer, Lightbox, Modal, Overlay, Router, Scene, Stack } from 'react-native-router-flux';
import MyDialog from '..//dialog/MyDialog';
import DrawerContent from '../components/drawer/DrawerContent';
import MyHeader from '../components/header/MyHeader';
import Entry from '../screens/Entry';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Second from '../screens/Second';
import SignUp from '../screens/SignUp';

export default () => (
  <Router >
    <Overlay key="overlay">
      <Modal key="modal" hideNavBar>
        <Lightbox key="lightbox">

          <Stack key="root" navBar={MyHeader}>
            <Scene key="Entry" component={Entry} title="Entry" />
            <Scene key="Login" component={Login} title="Login" />
            <Scene key="SignUp" component={SignUp} title="Sign Up" />
            <Scene key="Home" component={Home} title="Home" />
            <Scene key="Second" component={Second} title="Second" />

            <Drawer
              key="DrawerLeft"
              hideNavBar
              contentComponent={DrawerContent}
              drawerPosition="left"
              drawerOpenRoute="DrawerLeftOpen"
              drawerCloseRoute="DrawerLeftClose"
              drawerWidth={300}
            >
              <Scene key="HomeDrawer" component={Home} />

              <Drawer
                key="DrawerRight"
                hideNavBar
                contentComponent={DrawerContent}
                drawerPosition="right"
                drawerOpenRoute="DrawerRightOpen"
                drawerCloseRoute="DrawerLeftClose"
                drawerWidth={300}
              >
                <Scene key="Home2Drawers" component={Home} />
              </Drawer>
            </Drawer>
          </Stack>

          <Scene key="MyDialog" component={MyDialog} />

        </Lightbox>
        <Scene key="MyModal" component={MyDialog} title="MyModal" />
      </Modal>
    </Overlay>
  </Router>
);
