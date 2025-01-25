
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import UserLogin from './components/UserLogin';
import UserSignup from './components/UserSignup';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import ViewUsers from './components/ViewUsers';
import AddCampaign from './components/AddCampaign';
import SearchCampaigns from './components/SearchCampaign';
import ViewCampaigns from './components/ViewCampaigns';
import ViewcampaignsAdmin from './components/ViewcampaignsAdmin';
import AddAwareness from './components/AddAwareness';
import ViewAwareness from './components/ViewAwareness';
import ViewAwarenessAdmin from './components/ViewAwarenessAdmin';
import AddFeedback from './components/AddFeedback';
import ViewFeedback from './components/ViewFeedback';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path='/UserLogin' element={<UserLogin/>}/>
      <Route path='/UserSignup' element={<UserSignup/>}/>
      <Route path='/UserDashboard' element={<UserDashboard/>}/>
      <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
      <Route path='/AdminLogin' element={<AdminLogin/>}/>
      <Route path='/ViewUsers' element={<ViewUsers/>}/>
      <Route path='/AddCampaign' element={<AddCampaign/>}/>
      <Route path='/SearchCampaign' element={<SearchCampaigns/>}/>
      <Route path='/ViewCampaigns' element={<ViewCampaigns/>}/>
      <Route path='/ViewcampaignsAdmin' element={<ViewcampaignsAdmin/>}/>
      <Route path='/AddAwareness' element={<AddAwareness/>}/>
      <Route path='/ViewAwareness' element={<ViewAwareness/>}/>
      <Route path='/ViewAwarenessAdmin' element={<ViewAwarenessAdmin/>}/>
      <Route path='/AddFeedback' element={<AddFeedback/>}/>
      <Route path='/ViewFeedback' element={<ViewFeedback/>}/>
      
      
        
        </Routes></BrowserRouter>
       
      
    </div>
  );
}

export default App;
