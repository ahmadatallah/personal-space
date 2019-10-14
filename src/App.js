import React, { lazy, Suspense } from "react";
import { ThemeProvider, ColorMode } from "theme-ui";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";
import { H2 } from "./elements";
import GlobalStyles from "./global-styles";
import Loading from "./components/Loading";
import Flex from "./components/Flex";

import About from "./pages/About";
import Frames from "./pages/Frames";
import Home from "./pages/Home";
import HomeAR from "./pages/HomeAR";
import NotFound from "./pages/NotFound";
import Readings from "./pages/Readings";
import Writings from "./pages/Writings";

import Div from "./elements/Div";

const Bio = lazy(() => import("./pages/ar/Bio"));
const BornRich = lazy(() => import("./pages/ar/BornRich"));
const MidnightStory = lazy(() => import("./pages/ar/MidnightStory"));
const CreateReactAppEnvVars = lazy(() =>
  import("./pages/writings/CreateReactAppEnvVars")
);
const PascalTypeScript = lazy(() =>
  import("./pages/writings/PascalTypeScript")
);
const Society = lazy(() => import("./pages/ar/Society"));

// const About = lazy(() => import("./pages/About"));
// const Frames = lazy(() => import("./pages/Frames"));
// const Home = lazy(() => import("./pages/Home"));
// const HomeAR = lazy(() => import("./pages/HomeAR"));
// const NotFound = lazy(() => import("./pages/NotFound"));
// const Readings = lazy(() => import("./pages/Readings"));
// const Writings = lazy(() => import("./pages/Writings"));

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
              component={() => (
                <Suspense fallback={null}>
                  <Bio />
                </Suspense>
              )}
            />
            <Route
              path={`/ar/sorry-being-born-rich-still-leads-to-success`}
              component={() => (
                <Suspense fallback={null}>
                  <BornRich />
                </Suspense>
              )}
            />
            <Route
              path={`/ar/happy-society`}
              component={() => (
                <Suspense fallback={null}>
                  <Society />
                </Suspense>
              )}
            />
            <Route
              path={`/ar/midnight-story`}
              component={() => (
                <Suspense fallback={null}>
                  <MidnightStory />
                </Suspense>
              )}
            />
            <Route
              path="/writings"
              exact={true}
              component={() => (
                <Suspense
                  fallback={
                    <Flex
                      flexDirection="row"
                      mt={4}
                      pt={5}
                      justifyContent="center"
                    >
                      <H2 fontWeight={300} mr={2}>
                        {" "}
                        Loading{" "}
                      </H2>
                      <Loading type="spokes" color="currentcolor" />
                    </Flex>
                  }
                >
                  <Writings />
                </Suspense>
              )}
            />
            <Route
              path={`/writings/create-react-app-run-build-envs`}
              component={() => (
                <Suspense fallback={null}>
                  <CreateReactAppEnvVars />
                </Suspense>
              )}
            />{" "}
            <Route
              path={`/writings/pascal-typescript-example`}
              component={() => (
                <Suspense fallback={null}>
                  <PascalTypeScript />
                </Suspense>
              )}
            ></Route>
            <Route path="/about" exact={true} component={About} />
            <Route path="/writings" component={Home} />
            <Route
              path="/readings"
              exact={true}
              component={() => (
                <Suspense
                  fallback={
                    <Flex
                      flexDirection="row"
                      mt={4}
                      pt={5}
                      justifyContent="center"
                    >
                      <H2 fontWeight={300} mr={2}>
                        {" "}
                        Loading{" "}
                      </H2>
                      <Loading type="spokes" color="currentcolor" />
                    </Flex>
                  }
                >
                  <Readings />
                </Suspense>
              )}
            />
            <Route path="/frames" exact={true} component={Frames} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Div>
    </ThemeProvider>
  );
}

export default App;
