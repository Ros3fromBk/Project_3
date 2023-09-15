import "./About.css"
// import github from "src/assets/github-logo.svg"
// import reactLogo from "src/assets/react.svg"
function About({ engineers }) {

    return (
<>
{/* <img className="reactlogo" src={reactLogo} /> */}

        <div className="AboutMe">
            <div className="space">
                <h3>{engineers.name}</h3>
                <img src={engineers.pic} alt={engineers.name} />
                <h5>{engineers.hometown}</h5>
                <h5>{engineers.fact}</h5>
                <a href={engineers.github}>
                    {/* <img className="github" src={github} /> */}
                </a>
            </div>
        </div>
</>
    )
}

export default About