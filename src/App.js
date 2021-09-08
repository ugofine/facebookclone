import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import './App.css'
import Feeds from "./components/Feeds"
import Widget from "./components/Widget"


const App = () => {
  return (
     <div className="app">
       <Header/>
       <div className="app-body">
       <Sidebar/>
       <Feeds/>
       <Widget/>
       </div>
     </div>
  )
}

export default App
