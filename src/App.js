import React, { useEffect, Suspense, lazy } from 'react';
import { ThemeProvider, ColorMode } from 'theme-ui';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './theme';
import { P, Div, Span } from './elements';
import GlobalStyles from './global-styles';
import { connect } from 'react-redux';
import Flex from './components/Flex';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.minimal.css';
import './App.css';

const About = lazy(() => import('./pages/About'));
const Photography = lazy(() => import('./pages/Photography'));
const Home = lazy(() => import('./pages/Home'));
const Archive = lazy(() => import('./pages/Archive'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Readings = lazy(() => import('./pages/Readings'));
const Writings = lazy(() => import('./pages/Writings'));
const CreateReactAppEnvVars = lazy(() =>
  import('./pages/writings/CreateReactAppEnvVars')
);
const PascalTypeScript = lazy(() =>
  import('./pages/writings/PascalTypeScript')
);
const NotifyYourPWAViewers = lazy(() =>
  import('./pages/writings/NotifyYourPWAViewers')
);

const Msg = ({ closeToast }) => (
  <Flex flexDirection="column" alignItems="start">
    <P
      color="secondary"
      fontWeight={600}
      fontSize="12px"
      borderBottom="0.5px solid"
      borderColor="secondary"
    >
      {' '}
      Update available, Please refresh your browser!
    </P>
    <Flex
      flexDirection="column"
      fontFamily={theme.typefaces.mono}
      alignItems="start"
      py={2}
    >
      <Span color="primary" fontWeight={600} fontSize="12px">
        From PCs: Press Ctrl + Shift + R{' '}
      </Span>
      <Span color="primary" fontWeight={600} fontSize="12px">
        From Mobile Phones: Close all your opened tabs
      </Span>
    </Flex>
  </Flex>
);
const mapStateToProps = state => {
  return {
    serviceWorkerUpdated: state.serviceWorkerUpdated,
  };
};
function App(props) {
  useEffect(() => {
    if (props.serviceWorkerUpdated) {
      toast(<Msg />, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    return () => {};
  }, [props.serviceWorkerUpdated]);
  return (
    <ThemeProvider theme={theme}>
      <ColorMode />
      <GlobalStyles />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        backgroundColor="currentcolor"
        pauseOnVisibilityChange
        draggable
        pauseOnHoverautoClose={3000}
        toastClassName="toast-container"
      />
      <Div fontFamily={theme.typefaces.sansSerif}>
        <Router>
          <Suspense fallback={<></>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/archive" component={Archive} />
              <Route path="/writings" exact={true} component={Writings} />
              <Route
                path={'/writings/create-react-app-run-build-envs'}
                component={CreateReactAppEnvVars}
              />{' '}
              <Route
                path={'/writings/pascal-typescript-example'}
                component={PascalTypeScript}
              ></Route>
              <Route
                path={'/writings/notify-pwa-updates'}
                component={NotifyYourPWAViewers}
              ></Route>
              <Route path="/about" exact={true} component={About} />
              <Route path="/writings" component={Home} />
              <Route path="/readings" exact={true} component={Readings} />
              <Route path="/frames" exact={true} component={Photography} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      </Div>
    </ThemeProvider>
  );
}

export default connect(mapStateToProps)(App);
