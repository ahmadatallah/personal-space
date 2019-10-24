import React, { useEffect } from "react";
import { ThemeProvider, ColorMode } from "theme-ui";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";
import { P, Div, Span } from "./elements";
import GlobalStyles from "./global-styles";
import { connect } from "react-redux";
import Flex from "./components/Flex";
import About from "./pages/About";
import Frames from "./pages/Frames";
import Home from "./pages/Home";
import HomeAR from "./pages/HomeAR";
import NotFound from "./pages/NotFound";
import Readings from "./pages/Readings";
import Writings from "./pages/Writings";
import Bio from "./pages/ar/Bio";
import BornRich from "./pages/ar/BornRich";
import MidnightStory from "./pages/ar/MidnightStory";
import CreateReactAppEnvVars from "./pages/writings/CreateReactAppEnvVars";
import PascalTypeScript from "./pages/writings/PascalTypeScript";
import Society from "./pages/ar/Society";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.minimal.css";
import "./App.css";
import NotifyYourPWAViewers from "./pages/writings/NotifyYourPWAViewers";

const Msg = ({ closeToast }) => (
  <Flex flexDirection="column" alignItems="start">
    <P
      color="secondary"
      fontWeight={600}
      fontSize="12px"
      borderBottom="0.5px solid"
      borderColor="secondary"
    >
      {" "}
      Update available, Please refresh your browser!
    </P>
    <Flex
      flexDirection="column"
      fontFamily={theme.typefaces.mono}
      alignItems="start"
      py={2}
    >
      <Span color="primary" fontWeight={600} fontSize="12px">
        From PCs: Press Ctrl + Shift + R{" "}
      </Span>
      <Span color="primary" fontWeight={600} fontSize="12px">
        From Mobile Phones: Close all your opened tabs
      </Span>
    </Flex>
  </Flex>
);
const mapStateToProps = state => {
  return {
    serviceWorkerUpdated: state.serviceWorkerUpdated
  };
};
function App(props) {
  useEffect(() => {
    if (props.serviceWorkerUpdated) {
      toast(<Msg />, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ar" component={HomeAR} />
            <Route
              path={`/ar/school-of-biomedical-engineering`}
              component={Bio}
            />
            <Route
              path={`/ar/sorry-being-born-rich-still-leads-to-success`}
              component={BornRich}
            />
            <Route path={`/ar/happy-society`} component={Society} />
            <Route path={`/ar/midnight-story`} component={MidnightStory} />
            <Route path="/writings" exact={true} component={Writings} />
            <Route
              path={`/writings/create-react-app-run-build-envs`}
              component={CreateReactAppEnvVars}
            />{" "}
            <Route
              path={`/writings/pascal-typescript-example`}
              component={PascalTypeScript}
            ></Route>
            <Route
              path={`/writings/notify-pwa-updates`}
              component={NotifyYourPWAViewers}
            ></Route>
            <Route path="/about" exact={true} component={About} />
            <Route path="/writings" component={Home} />
            <Route path="/readings" exact={true} component={Readings} />
            <Route path="/frames" exact={true} component={Frames} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Div>
    </ThemeProvider>
  );
}

export default connect(mapStateToProps)(App);
