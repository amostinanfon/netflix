import { ArrowBackOutlined } from '@material-ui/icons';
import { useLocation } from 'react-router';
import './watch.scss';



function Watch() {

  const location = useLocation();
  const movie = location.state.movie
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
        <video 
            className="video" 
            src={movie.video}
            //url='https://www.youtube.com/watch?v=iLS2DPWSJ78'
            autoPlay
            controls
        />
        
    </div>
  )
}

export default Watch