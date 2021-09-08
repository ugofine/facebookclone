import Story from './Story'
import pic from '../images/pic.jpg'
import chi from '../images/chi.jpg'
import avat1 from '../images/avat1.png'
import avat from '../images/avat.jpg'
import womanlawyer from '../images/womanlawyer.jpg'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div  className="storyReel">
            <Story  profilePic={pic} name="Debbie Ogu" alt="debbie" bgimage={chi}/>
            <Story profilePic={pic} name="Debbie Ogu" alt="debbie" bgimage={avat1}/>
            <Story profilePic={pic} name="Debbie Ogu" alt="debbie" bgimage={womanlawyer} />
            <Story  profilePic={pic} name="Debbie Ogu" alt="debbie" bgimage={avat}/>
            {/* <Story  profilePic={pic} name="Debbie Ogu" alt="debbie" bgimage={chi}/>
            <Story profilePic={pic} name="Debbie Ogu" alt="debbie" bgimage={womanlawyer} /> */}
        </div>
    )
}

export default StoryReel
