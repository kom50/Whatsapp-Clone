import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ChatPage from './pages/ChatPage'
import ErrorPage from './pages/error-page'
import AboutPage from './pages/AboutPage'
import Layout from './pages/Layout';
import ContactsPage from "./pages/ContactPage";
import CameraPage from "./pages/CameraPage";


function App() {
  return (
    <div className="bg-white h-full w-full text-black overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ChatPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/camera' element={<CameraPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
