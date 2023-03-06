import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';

function App() {
  return (
    <div>
      <SearchHeader />
      <Outlet />
    </div>
  );
}

export default App;
