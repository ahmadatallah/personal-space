import React, { lazy, Suspense } from "react";
import { ThemeProvider, ColorMode } from "theme-ui";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./global-styles";

// import pages here
import Home from "./pages/Home";
import HomeAR from "./pages/HomeAR";
import NotFound from "./pages/NotFound";
import Reading from "./pages/Reading";
import Writings from "./pages/Writings";
import Div from "./elements/Div";
import Bio from "./pages/ar/Bio";
import BornRich from "./pages/ar/BornRich";
import MidnightStory from "./pages/ar/MidnightStory";
import CreateReactAppEnvVars from "./pages/writings/CreateReactAppEnvVars";
import PascalTypeScript from "./pages/writings/PascalTypeScript";
import Society from "./pages/ar/Society";

const About = lazy(() => import("./pages/About"));
const Frames = lazy(() => import("./pages/Frames"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorMode />
      <GlobalStyles />
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
            <Route
              path="/writings"
              exact={true}
              component={() => (
                <Suspense fallback={null}>
                  <Writings />
                </Suspense>
              )}
            />
            <Route
              path={`/writings/create-react-app-run-build-envs`}
              component={CreateReactAppEnvVars}
            />{" "}
            <Route
              path={`/writings/pascal-typescript-example`}
              component={PascalTypeScript}
            >
            </Route>

            <Route
              path="/about"
              exact={true}
              component={() => (
                <Suspense fallback={null}>
                  <About />
                </Suspense>
              )}
            />
            <Route path="/writings" component={Home} />
            <Route
              path="/readings"
              exact={true}
              component={() => <Reading showColorMode={true} />}
            />
            <Route
              path="/frames"
              exact={true}
              component={() => (
                <Suspense fallback={null}>
                  <Frames />
                </Suspense>
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Div>
    </ThemeProvider>
  );
}

export default App;
