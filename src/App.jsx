//import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import JobSearch from "./pages/JobSearch"



const App = () => {
  return (
    <>
      <Router>

        <Routes>
          <Route index element={<Home />} />

          <Route path="/job-search" element={<JobSearch />} />

        </Routes>
      </Router>

    </>
  )
}

export default App;