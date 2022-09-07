import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <BrowserRouter>
        <Header />
        <div className="flex-1 overflow-y-auto">
          <Body />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
