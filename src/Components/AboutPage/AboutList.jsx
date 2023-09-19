import team from "../Util/Map/team.json"
import reactLogo from "../../../src/assets/react.svg"
import About from "./AboutInfo.jsx"
import "./About.css"

function AboutList() {
    // console.log(team)
    let listOfEngineers = team.map((engineer, index) => { return (<About key={index} engineer={engineer} />) })
    return (

        <>
            <h1> Resources</h1>
            {/* "https://rapidapi.com/topapis/api/homeless-shelter 

~https://group-project-3.netlify.app/

~https://github.com/Ros3fromBk/Project_3

~https://excalidraw.com/#room=1aa50ded207bc851c230,LPHkaZh6S0VJW2uV8i1usw" */}
            <img className="reactlogo" src={reactLogo} />

            <h2 className="headerForAbout">MEET THE TEAM</h2>
            <div className="Engineers">{listOfEngineers}</div>
        </>
    )

}

export default AboutList