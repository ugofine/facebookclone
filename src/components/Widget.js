import './Widget.css'

const Widget = () => {
    return (
        <div className="widget">

{/* <iframe width="560" height="315"
 src="https://www.youtube.com/embed/DQfeB_FKKkc" 
 title="YouTube video player" frameborder="0" 
 allow="accelerometer; autoplay; clipboard-write; 
 encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}


             <iframe 
            src="https://www.facebook.com/plugins/page.php?href=http://web.facebook.com/tech365ng&tabs=timeline&width=500&show_text=true&appId&height=1500" 
            width="550"
            height="100%" 
            style={{border:"none",overflow:"hidden"}}
             scrolling="no" frameborder="0" 
             allowfullscreen="true"
             title="tech365"
              

              ></iframe> 
        </div>
    )
}

export default Widget
