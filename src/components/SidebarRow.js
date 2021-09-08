import {Avatar} from "@material-ui/core"
import './SidebarRow.css'
const SidebarRow = ({img, Icon,title}) => {
    return (
        <div className="sidebar-row">
            {img && <Avatar src={img} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
            
        </div>
    )
}

export default SidebarRow
