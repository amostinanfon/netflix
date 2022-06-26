import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./listItem.scss";



function ListItem({index, item}) {

  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});


  useEffect(() => {
    const getMovie = async () => {
      try {
      const res = await axios.get("/movies/find/"+ item, {
          headers: {
            token :
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjQxNDBiM2U5NTk3MGMwMDgwZWFjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTk5Mzc1NiwiZXhwIjoyNTE5OTkzNzU2fQ.6AMdUux3LDgvMDUNOgcFdYHV3KxcCr_ro2mf3fYZo78"
          }
        });
        setMovie(res.data);
      } catch(err) {
      console.log(err)
    }
  };
  getMovie();
}, [item])
  


  return (
    <div className="listItem"
    style={{left: isHovered && ((index*225) -50 + (index*2.5))}}
          onMouseEnter={()=>setIsHovered(true)}
          onMouseLeave={()=>setIsHovered(false)}
    >
        <img src={movie.img} alt="" />
        
        {
          isHovered && (
        <>
            <video
              src="/video/Neon.mp4"
              autoPlay
              loop={true}
              progress
              controls
            />
            {/* <ReactPlayer url={item.video} style={{height:"100%" , width:"100%"}}/> */}
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon"/>
                <ThumbUpAltOutlined className="icon"/>
                <ThumbDownAltOutlined className="icon"/>
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">
                {movie.desc}
              </div>
              <div className="genre">
                {movie.genre}
              </div>
            </div>
        </>
          )
        }
    </div>
  )
}

export default ListItem;