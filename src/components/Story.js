import { Avatar } from "@material-ui/core"
import './Story.css'

const Story = ({bgimage,profilePic, name}) => {
    return (
        <div  style={{backgroundImage: `url(${bgimage})` }} className="story">
            <Avatar src={profilePic} alt={name} className="story-avatar"/>
            <h4>{name}</h4>
            
        </div>
    )
}

export default Story
