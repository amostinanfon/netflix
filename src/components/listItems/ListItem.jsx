import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./listItem.scss";



function ListItem({index, item}) {

  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});


  useEffect(() => {

    const getMovie = async () => {
      try {
      const res = await axios.get("/movies/" + item , {
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
    <Link to="/watch" state={{movie}}>
      <div 
            className="listItem"
            style={{left: isHovered && ((index*225) -50 + (index*2.5))}}
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
      >
          <img src={movie.img} alt="" />
          
          {
            isHovered && (
          <>
              <video
                src={movie.video}
                autoPlay
                loop
                controls
              />
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
    </Link>
  )
}

export default ListItem;