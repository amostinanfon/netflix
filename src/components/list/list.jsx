import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import ListItem from '../listItems/ListItem';
import './list.scss';



function List() {
  return (
    <div className='list'>
        <div className="listTitle">Continue to watch</div>
        <div className="wrapper">
            <ArrowBackIosOutlined/>
            <div className="container">
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
            <ArrowForwardIosOutlined/>
        </div>
    </div>
  )
}

export default List;