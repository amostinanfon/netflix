import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import './list.scss' 



function list() {
  return (
    <div className='list'>
        <div className="listTitle">Continue to watch</div>
        <div className="wrapper">
            <ArrowBackIosOutlined/>
            <div className="container">
                
            </div>
            <ArrowForwardIosOutlined/>
        </div>
    </div>
  )
}

export default list