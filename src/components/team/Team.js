import "./team.css"
import { BlogHeader } from '../blog/components/import'
import { TeamMemberCard } from "./components/import"
import { teamMembers } from "./util"

const Team = () => {
    return (
        <div>
            <BlogHeader title='Team' />
            <div className="team_page container">
                <div className="team_page_header">
                    <h2> People Who Are Behind The Achievements </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. </p>
                </div>

                <div className="team_page_memberContainer">
                    {
                        teamMembers.map(({name, position, img}, idx) => <TeamMemberCard key={idx} name={name} position={position} img={img} />)    
                    }
                </div>
            </div>
        </div>
    )
}

export default Team