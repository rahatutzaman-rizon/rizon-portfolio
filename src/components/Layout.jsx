import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;