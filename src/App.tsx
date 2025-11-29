import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Landing from "./pages/Landing";
import ProjectPage from "./pages/Project";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
