import facebooklogo from '../images/facebooklogo.png';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { Avatar, IconButton } from '@material-ui/core';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Header.css'
import pic from '../images/pic.jpg';

const Header = () => {
    return (
        <div  className="header" >
      <div className="header-left">
          <img src={facebooklogo} alt="logo" class="logo" />
          <div className="header-input"> 
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" class="inside-input"/>
          </div>
      </div>
      
      <div className="header-center">
          <div className="header-option active ">
              <HomeIcon/>
          </div>
          <div className="header-option">
              <GroupIcon />
          </div>
          <div className="header-option">
              <EmojiFlagsIcon/>
          </div>
          <div className="header-option">
              <StorefrontIcon/>
          </div>
      </div>
      <div className="header-right">
          <div className="header-info">
              <div className="header-right-avatar">
              <Avatar src={pic} />
              </div>
              <h4>Debbie Ogu</h4>
              <IconButton>
                  <DragIndicatorIcon/>
              </IconButton>
              <IconButton>
                  <ChatBubbleIcon />
              </IconButton>
              <IconButton>
                  < NotificationsIcon/>
              </IconButton>
              <IconButton>
                  <ExpandMoreIcon />
              </IconButton>
        
          </div>
      </div>
      
    </div>
    )
}

export default Header
