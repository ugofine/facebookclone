import { Avatar } from '@material-ui/core';
import { ChatBubbleOutlineOutlined } from '@material-ui/icons';
import ShareIcon from '@material-ui/icons/Share';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import './Post.css'

const Post = ({image, message, username}) => {
    return (
        <div className="post">
            <div className="post-top">
                <Avatar className="post-avatar avatar" />
                <div className="post-info">
                    <h4>{username}</h4>
                    <p>2m</p>
                </div>
            </div>
            <div className="post-bottom">
                <p>{message}</p>
                <img  className="post-image" src={image} alt="" />

                <div className="post-option">
                    <div className="post-icons">
                        <ThumbUpIcon/>
                        <p>Like</p>

                    </div>
                    <div className="post-icons">
                        <ChatBubbleOutlineOutlined/>
                        <p>Comment</p>

                    </div>
                    <div className="post-icons">
                        <ShareIcon/>
                        <p>Share</p>
                          
                    </div>

                </div>
            </div>
            
            <div className="post-top">
                <Avatar className="post-avatar avatar" />
                <div className="post-info">
                    <h4>{username}</h4>
                    <p>2m</p>
                </div>
            </div>
            <div className="post-bottom">
                <p>{message}</p>
                <img  className="post-image" src={image} alt="" />

                <div className="post-option">
                    <div className="post-icons">
                        <ThumbUpIcon/>
                        <p>Like</p>

                    </div>
                    <div className="post-icons">
                        <ChatBubbleOutlineOutlined/>
                        <p>Comment</p>

                    </div>
                    <div className="post-icons">
                        <ShareIcon/>
                        <p>Share</p>
                          
                    </div>

                </div>
            </div>

            <div className="post-top">
                <Avatar className="post-avatar avatar" />
                <div className="post-info">
                    <h4>{username}</h4>
                    <p>2m</p>
                </div>
            </div>
            <div className="post-bottom">
                <p>{message}</p>
                <img  className="post-image" src={image} alt="" />

                <div className="post-option">
                    <div className="post-icons">
                        <ThumbUpIcon/>
                        <p>Like</p>

                    </div>
                    <div className="post-icons">
                        <ChatBubbleOutlineOutlined/>
                        <p>Comment</p>

                    </div>
                    <div className="post-icons">
                        <ShareIcon/>
                        <p>Share</p>
                          
                    </div>

                </div>
            </div>
            
            
        </div>
    )
}

export default Post
