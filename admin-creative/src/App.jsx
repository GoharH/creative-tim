import './assets/style/index.scss';
import NavigationBar from './components/navigation-bar';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Dashboard from './pages/dashboard';
import UserProfile from './pages/user-profile';
import Footer from './components/footer';
import Typography from './pages/typography';
import Icons from './pages/icons';
import Notification from './pages/notifications';
import Map from './pages/map';
import TablesPage from './pages/tables';
import TableWithComponent from './pages/tables-with-comp'


function App() {
  return (
    <div className="G-flex">
      <NavigationBar />
      <div className='G-main-section'>
        <Header />

        <div className='G-page-section'>
          <Routes>
            <Route path={"/dashboard"} element={<Dashboard />}></Route>
            <Route path={"/user-profile"} element={<UserProfile />}></Route>
            {/* <Route path={"/table-list"} element={<TablesPage />}></Route> */}
            <Route path={"/table-list"} element={<TableWithComponent />}></Route>
            <Route path={"/typography"} element={<Typography />}></Route>
            <Route path={"/icons"} element={<Icons />}></Route>
            <Route path={"/maps"} element={<Map />}></Route>
            <Route path={"/notifications"} element={<Notification />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
