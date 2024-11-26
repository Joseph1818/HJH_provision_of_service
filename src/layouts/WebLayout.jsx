import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function WebLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default WebLayout;

