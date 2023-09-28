"use client"
import React from 'react'

export default function Header({onMainWindowChange}) {
    const HEADER_BUTTON_CLASSES = "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
  return (
    <header className="col-start-1 col-end-3 m-auto text-center p-4">
        <nav className="m-auto text-center">
            <ul className="m-auto text-center">
                <li className="m-auto text-center" key="home">
                    <h1 className="m-auto text-center">Lucio</h1>
                </li>
                <li className="m-auto text-center" key="about">
                    <button
                        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={() => onMainWindowChange('ABOUT')}
                    >About</button>
                </li>
                <li key="projects">
                    <button
                        className={HEADER_BUTTON_CLASSES}
                        onClick={() => onMainWindowChange('PROJECTS')}
                    >Projects</button>
                </li>
                <li key="tech">
                    <button
                        className={HEADER_BUTTON_CLASSES}
                        onClick={() => onMainWindowChange('TECH')}
                    >Tech</button>
                </li>
                <li key="cv">
                    <label>
                        Download CV / Resume
                        <button className={HEADER_BUTTON_CLASSES}>EN</button>
                        <button className={HEADER_BUTTON_CLASSES}>ES</button>
                    </label>
                </li>
                <li key="lang">
                    <label>
                        Language
                        <button className={HEADER_BUTTON_CLASSES}>EN</button>
                        <button className={HEADER_BUTTON_CLASSES}>ES</button>
                    </label>
                </li>
                <li key="lang">
                    <label>
                        Theme
                        <button className={HEADER_BUTTON_CLASSES}>Light</button>
                        <button className={HEADER_BUTTON_CLASSES}>Dark</button>
                    </label>
                </li>
            </ul>
        </nav>
    </header>
  )
}
