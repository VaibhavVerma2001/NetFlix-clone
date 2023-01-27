import { useState, useEffect } from 'react';
import './Listitem.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

function Listitem(props) {
  const index = props.index;
  const itemId = props.itemId; //this is Id of movie

  // fetch movie of id = item
  const [item, setItem] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/movies/find/" + itemId, {
          headers: {
            token:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2JhY2NlZDk4YTZjZmFlMmU0MmNjNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDg0NzM4OCwiZXhwIjoxNjc1Mjc5Mzg4fQ.EnDlFKBU2Yq3ugt4y20FI8mlFLNDxYNt2vgUWRvaX4Y"
          },
        });
        // console.log(res.data);
        setItem(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [itemId]);

  const [isHovered, setIsHovered] = useState(false);

  return (
    // to check whether we hovered any item or not 
    <Link to={`/watch/${itemId}`}>
      <div
        className="list-item"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={item.img} alt="movie-thumbnail" />

        {isHovered && (
          <>
            <video src={item.trailer} autoPlay={true} loop />

            <div className="item-info" >
              <div className="icons">
                <PlayArrowIcon className='icon' />
                <AddIcon className='icon' />
                <ThumbUpOutlinedIcon className='icon' />
                <ThumbDownOutlinedIcon className='icon' />
              </div>
              <div className="info">
                <div className="about">
                  <p className='time'>1h 14 mins</p>
                  <p className='limit time'>+{item.limit}</p>
                  <p className='time'>{item.year}</p>
                </div>
                <div className="desc">
                  {item.desc}
                </div>
                <p className="genre">{item.genre}</p>
              </div>
            </div>
          </>
        )}



      </div>
    </Link>
  )
}

export default Listitem;
