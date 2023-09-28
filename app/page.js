"use client"
import About from "@/comps/About"
import Footer from "@/comps/Footer"
import Header from "@/comps/Header"
import Projects from "@/comps/Projects"
import TechStack from "@/comps/TechStack"
import { useState } from "react"

export default function Home() {

  const [mainWindow, setMainWindow] = useState("");

  const handleMainWindowChange = clickedSection => {
    setMainWindow(clickedSection)
  }

  const renderMainWindow = () => (
    mainWindow === "PROJECTS" ? <Projects /> :
    mainWindow === "TECH" ? <TechStack /> :
    mainWindow === "ABOUT" ? <About /> :
    <About />
  )
  return (
    <div className="bg-teal-900 grid grid-cols-8 gap-2 max-w-screen h-screen">
      <Header onMainWindowChange={handleMainWindowChange} />
        <main className="col-start-3 col-end-8 py-4">
          <div className="rounded-xl bg-teal-950 h-full p-4">
            {renderMainWindow()}
          </div>
        </main>
      <Footer />
    </div>
  )
}
