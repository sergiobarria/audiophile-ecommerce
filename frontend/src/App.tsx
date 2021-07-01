import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import { theme } from "./theme/Theme";
import { GlobalStyles } from "./theme/GlobalStyles";
import Layout from "./components/layout/Layout";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <GlobalStyles />
          <Routes />
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
