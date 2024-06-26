

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './store'; 
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import AddBeneficiaryPage from './pages/AddBeneficiaryPage';
import ViewBeneficiaryPage from './pages/ViewBeneficaryPage';

function App() {
  return (
    <Provider store={store}> 
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-beneficiary" element={<AddBeneficiaryPage />} />
          <Route path="/view-beneficiaries" element={<ViewBeneficiaryPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
