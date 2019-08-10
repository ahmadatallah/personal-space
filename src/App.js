import React from "react";
import { ThemeProvider, ColorMode } from "theme-ui";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./global-styles";
import rtl from "./styled-rtl";

// import pages here
import Home from "./pages/Home";
import HomeAR from "./pages/HomeAR";
import NotFound from "./pages/NotFound";
import Reading from "./pages/Reading";
import Div from "./elements/Div";
import About from "./pages/About";

function App() {
  const currentLocation = window.location.pathname;
  const isRTL = /ar$/.test(currentLocation);
  return (
    <ThemeProvider theme={theme}>
      <ColorMode />
      <GlobalStyles />
      {isRTL ? (
        <Div dir="rtl" fontFamily={theme.typefaces.helvetica}>
          <Router>
            <Route path="/ar" component={HomeAR} />
          </Router>
        </Div>
      ) : (
        <Div fontFamily={theme.typefaces.sansSerif}>
          <Router>
            <Route exact path="/" component={Home} />
            <Route path="/not-found" component={NotFound} />
            {/* TODO Add routes */}
            <Route path="/about" component={About} />
            <Route path="/writings" component={Home} />
            <Route
              path="/readings"
              component={() => <Reading showColorMode={true} />}
            />
            <Route path="/frames" component={Home} />
            <Route path="/music" component={Home} />
          </Router>
        </Div>
      )}
    </ThemeProvider>
  );
}

export default App;
