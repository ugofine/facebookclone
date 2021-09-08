import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"
import './Feeds.css'
import photo from '../images/chi.jpg'



const Message= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusamus sapiente dolore fugit? Quisquam sed omnis commodi, deleniti quas asperiores autem. Tenetur iure veritatis animi amet consequuntur corporis provident neque?'
const username = 'Debbie Ogu'

const Feeds = () => {
    return (
        <div className="feeds">
            <StoryReel />
            <MessageSender />
            <Post image= {photo} message={Message} username={username}/>
        </div>
    )
}

export default Feeds
