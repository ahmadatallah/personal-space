import React, { lazy, Suspense } from "react";
import { ThemeProvider, ColorMode } from "theme-ui";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./global-styles";
import rtl from "./styled-rtl";

// import pages here
import Home from "./pages/Home";
import HomeAR from "./pages/HomeAR";
import NotFound from "./pages/NotFound";
import Reading from "./pages/Reading";
import Div from "./elements/Div";
import Bio from "./pages/ar/Bio";
import BornRich from "./pages/ar/BornRich";

const About = lazy(() => import("./pages/About"));
const Frames = lazy(() => import("./pages/Frames"));

function App() {
  const currentLocation = window.location.pathname;
  const isRTL = /ar$/.test(currentLocation);
  return (
    <ThemeProvider theme={theme}>
      <ColorMode />
      <GlobalStyles />
      {isRTL ? (
        <Div dir="rtl">
          <Router>
            <Route exact path="/ar" component={HomeAR} />
            <Route path={`/ar/school-of-biomedical-engineering`} component={Bio} />
            <Route path={`/ar/sorry-being-born-rich-still-leads-to-success`} component={BornRich} />
          </Router>
        </Div>
      ) : (
        <Div fontFamily={theme.typefaces.sansSerif}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* TODO Add routes */}
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
      )}
    </ThemeProvider>
  );
}

export default App;
