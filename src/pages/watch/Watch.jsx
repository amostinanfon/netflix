import { ArrowBackOutlined } from '@material-ui/icons';
import ReactPlayer from 'react-player';
import './watch.scss';



function Watch() {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
        {/* <video 
            className="video" 
            src="/video/Neon.mp4"
            //url='https://www.youtube.com/watch?v=iLS2DPWSJ78'
            autoPlay 
            progress
            controls
        /> */}
        <ReactPlayer
        
        className="video" 
            url="https://www.youtube.com/watch?v=iLS2DPWSJ78"
            autoPlay
            loop
            progress
            controls
        />
    </div>
  )
}

export default Watch