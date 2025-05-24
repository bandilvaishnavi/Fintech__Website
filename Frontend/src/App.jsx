import Events from "./pages/Events"
import Home from "./pages/Home"
import { Routes, Route, Router } from "react-router-dom"
import RegisterEvents from "./pages/RegisterEvents"
import Resources from "./pages/Resources3"
import ProjectSection from "./pages/ProjectSection"
import Alumni from "./pages/Alumni"
import Navbar from "./Components/Navbar"

import SessionPart from "./pages/SessionPart"
import About from "./pages/AboutSection"

function App() {

  return (
    <>
    <Navbar/>
    <main>
      <Routes className="p-20">
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events/register" element={<RegisterEvents />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<ProjectSection />}/>
        <Route path="/sessions" element={<SessionPart/>}/>
        <Route path="/alumni" element={<Alumni/>}/>
      </Routes>
    </main>
    </>
  )
}

export default App
 