import './style/App.css';
import { Routes , Route } from 'react-router-dom';
import HomeLayout from './layouts/home.layout';

function App() {

  return (
    <Routes>
      <Route path="/home" element={<HomeLayout />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
      </Route>
    </Routes>
  )
}

export default App
