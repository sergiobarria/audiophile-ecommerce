import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { theme } from './theme/Theme';
import { GlobalStyles } from './theme/GlobalStyles';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
