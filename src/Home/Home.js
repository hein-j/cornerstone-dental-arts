import './Home.css';
import cover from './assets/cover.jpg'

function Home () {
  return (
    <div className="Home">
      <div className="cover-container">
        <img src={cover} alt="cover"></img>
      </div>
    </div>
  )
}

export default Home