import "./About.css"
import github from "../../../src/assets/github-logo.svg"
function AboutInfo({ engineer }) {

    return (
<>

        <div className="AboutMe">
            <div className="space">
                <h3>{engineer.name}</h3>
                <img id="imgForEngineeer" src={engineer.pic} alt={engineer.name} />
                <br/> <hr/>
                <h5>{engineer.hometown}</h5>
                <br/> <hr/>
                  <p>{engineer.fact}
                    </p>  
                <a href={engineer.github}>
                    <img className="github" src={github} />
                </a>
            </div>
        </div>
</>
    )
}

export default AboutInfo