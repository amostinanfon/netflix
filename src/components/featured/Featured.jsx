import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from 'react';
import "./featured.scss";



function Featured({type}) {
  return (
    <div>
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>
                        {type === "movies" ? "Movies" : "Series"}
                        <select name="genre" id="genre">
                            <option>Genre</option>
                            <option value="adventure">adventure</option>
                            <option value="comedy">comedy</option>
                            <option value="crime">crime</option>
                            <option value="fantasy">fantasy</option>
                            <option value="horror">horror</option>
                            <option value="thriller">thriller</option>
                            <option value="western">western</option>
                            <option value="drama">drama</option>                            
                            <option value="animation">animation</option>                            
                            <option value="sci-fi">sci-fi</option>                            
                            <option value="documentary">documentary</option>                            
                            <option value="romance">romance</option>                            
                            <option value="historical">historical</option>                            
                        </select>
                    </span>
                </div>
            )}
            <img 
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt=''
            />
            <div className='info'>
                <img
                    src='https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABfFZZzuu1pnfxv9XzQl6tcNXEKxQ2s42uG4eNLpTHb_vQulAwx1W_SN7zegXRRNCE_-TE8QLaFONjD5wgjvJnPr1TMedsS-VglMBIxI1dU8Q.png?r=218'
                    alt=''
                />
                <span className='desc'>

 Commodo sint aliqua ea aute dolore amet magna officia dolor. Aute tempor esse sunt et. Duis exercitation fugiat nulla eiusmod. Mollit proident non in Lorem ut laboris occaecat.

Lorem enim qui magna consequat consectetur laborum. Ad ut nostrud veniam non irure et sunt Lorem. Deserunt reprehenderit magna nulla nisi eu fugiat. Ad eiusmod in elit do duis consectetur laboris ut et.
            </span>
            <div className='buttons'>
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>            
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>            
            </div>
        </div>
   </div>
    </div>
  )
}

export default Featured