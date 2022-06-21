import { ArrowBackOutlined } from '@material-ui/icons';
import './watch.scss';



function Watch() {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
        <video 
            className="video" 
            src="/video/Neon street figure lighting night video _ motion green screen _ music background.mp4"
            autoPlay 
            progress
            controls
        />
    </div>
  )
}

export default Watch