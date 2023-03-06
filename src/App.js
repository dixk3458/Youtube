import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      헤더
      <Outlet />
    </div>
  );
}

export default App;
