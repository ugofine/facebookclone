import SidebarRow from "./SidebarRow"
import img1 from "../images/pic.jpg"
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import FlagIcon from '@material-ui/icons/Flag';
import './Sidebar.css'



const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow img={img1} title="Debbie Ogu"/>
            <SidebarRow Icon={PeopleAltIcon} title="Friends"/>
            <SidebarRow Icon={FlagIcon} title="Pages"/>
            <SidebarRow Icon={GroupAddOutlinedIcon} title="Groups"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="See More"/>
             <hr/>
             <SidebarRow img={img1} title="Market Place"/>
             <SidebarRow img={img1} title="Group"/>
             <SidebarRow img={img1} title="Pages"/>
             <SidebarRow img={img1} title="Debbie Ogu"/>
             <SidebarRow img={img1} title="Debbie Ogu"/>

        </div>
    );
}

export default Sidebar
