import GlobalStyle from './globalStyle';
import ComingSoon from './pages/ComingSoon';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  return (
    <>
      <GlobalStyle />
      <ComingSoon />
    </>
  );
}

export default App;
