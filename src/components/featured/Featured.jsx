import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import axios from 'axios';
import React, { useState , useEffect} from 'react';
import "./featured.scss";



function Featured({type}) {

    const [content, setContent] = useState({});

    useEffect(() => {
        const getList = async () =>{
            try {
                const res = await axios.get(`/movies/?type=${type}`,
                    {
                        headers:{
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjQxNDBiM2U5NTk3MGMwMDgwZWFjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTk5Mzc1NiwiZXhwIjoyNTE5OTkzNzU2fQ.6AMdUux3LDgvMDUNOgcFdYHV3KxcCr_ro2mf3fYZo78"
                        }
                    }
                )
                setContent(res.data[0]);
            } catch(err) {
                console.log(err);
            }
        };
        getList();
    },[type])

  return (
    <div>
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>
                        {type === "movie" ? "Movies" : "Series"}
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
                src={content.img} 
                alt=''
            />
            <div className='info'>
                <img
                    src={content.img}
                    alt=''
                />
                <span className='desc'>
                    {content.desc}
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