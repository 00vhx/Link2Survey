import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Join from './pages/Join';
import './App.css';
import CreatePage from './pages/creator/CreatePage';
import MyPage from './pages/mypage/MyPage';
import FinalQuestion from './pages/FinalQuestion';
import SurveyDetail from './pages/survey/SurveyDetail';
import SurveyList from './pages/survey/SurveyList';
function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Layout><MainPage /></Layout>} />
                    <Route path="/login" element={<Layout><Login /></Layout>} />
                    <Route path="/join" element={<Layout><Join /></Layout>} />
                    <Route path="/create" element={<Layout><CreatePage /></Layout>} />
                    <Route path="/mypage" element={<Layout><MyPage /></Layout>} />
                    <Route path="/final" element={<Layout><FinalQuestion /></Layout>} />
                    <Route path="/surveydetail" element={<Layout><SurveyDetail /></Layout>} />
                    <Route path="/surveylist" element={<Layout><SurveyList /></Layout>} />
                </Routes>
        </Router>
    );
}

export default App;
