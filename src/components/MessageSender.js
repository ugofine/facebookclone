import { Avatar } from "@material-ui/core"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
import './MessageSender.css'


const MessageSender = () => {
    return (
        <div className="messagesender">
            <div className="message-top">
                <Avatar />
                <form >
                    <input type="text" placeholder="Whats on your mind, Debbie?" />

                </form>

            </div>
            <div className="message-bottom">
                <div className="message-option">
                    <VideocamIcon/>
                    <h3>Live Video</h3>

                </div>
                <div className="message-option">
                    <PhotoLibraryIcon/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="message-option">
                    <MoodIcon/>
                    <h3>Feeling/Activity</h3>

                </div>

            </div>
        </div>
    )
}

export default MessageSender
