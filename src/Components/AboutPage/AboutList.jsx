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
            <img className="reactlogo" src={reactLogo} />

            <h2 className="headerForAbout">MEET THE TEAM</h2>
            <div className="Engineers">{listOfEngineers}</div>
        </>
    )

}

export default AboutList