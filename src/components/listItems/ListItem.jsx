import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";;



function ListItem({index}) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="listItem"
    style={{left: isHovered && ((index*225) -50 + (index*2.5))}}
          onMouseEnter={()=>setIsHovered(true)}
          onMouseLeave={()=>setIsHovered(false)}
    >
        <img src="https://www.tomsguide.fr/content/uploads/sites/2/2018/05/mcu-02.jpg" alt="" />
        
        {
          isHovered && (
        <>
            <video
              // muted
              autoPlay
              loop
              src="/video/Neon street figure lighting night video _ motion green screen _ music background.mp4"    
            
            />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon"/>
                <ThumbUpAltOutlined className="icon"/>
                <ThumbDownAltOutlined className="icon"/>
              </div>
              <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem modi commodi ipsam blanditiis ratione inventore .
              </div>
              <div className="genre">
                Action
              </div>
            </div>
        </>
          )
        }
    </div>
  )
}

export default ListItem;