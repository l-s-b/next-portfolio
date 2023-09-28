import React from 'react'
import TabLink from './TabLink'

function Footer() {
    const socialsLinks = {
        gh: "https://www.github.com/l-s-b",
        in: "https://www.linkedin.com/lucio-sb",
        gmail: "mailto:luciosb100@gmail.com",
        x: "https://twitter.com/LucioSB1",
        skype: "https://join.skype.com/invite/xEdbc4NpM005",
        disc: "https://twitter.com/LucioSB1"
    }
  return (
    <footer className="col-start-8 col-end-9 flex flex-col p-4">
        <h3>Reach out and check out my socials:</h3>
        <ul>
            <li key="gh">
                <TabLink to={socialsLinks.gh}>GitHub</TabLink>
            </li>
            <li key="in">
                <TabLink to={socialsLinks.in}>LinkedIn</TabLink>
            </li>
            <li key="gmail">
                <TabLink to={socialsLinks.gmail}>Gmail</TabLink>
            </li>
            <li key="x">
                <TabLink to={socialsLinks.x}>X</TabLink>
            </li>
            <li key="skype">
                <TabLink to={socialsLinks.skype}>Skype</TabLink>
            </li>
            <li key="disc">Discord: l_s_b</li>
        </ul>
    </footer>
  )
}

export default Footer