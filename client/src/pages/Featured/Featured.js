import './Featured.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Featured(props) {
    const type = props.type;
    const setGenre = props.setGenre;

    //get random movie
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/movies/random?type=${type}`, {
                    headers: {
                        token:
                            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2JhY2NlZDk4YTZjZmFlMmU0MmNjNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDg0NzM4OCwiZXhwIjoxNjc1Mjc5Mzg4fQ.EnDlFKBU2Yq3ugt4y20FI8mlFLNDxYNt2vgUWRvaX4Y"
                    },
                });
                // console.log(res.data);
                setMovie(res.data[0]); // sample gives array 
            } catch (err) {
                console.log(err);
            }
        };
        getMovie();
    }, [type]);

    // console.log(movie.img);

    return (
        <div className="featured">
          {type && (
            <div className="category">
              <span>{type === "movies" ? "Movies" : "Series"}</span>
              <select
                name="genre"
                id="genre"
                onChange={(e) => setGenre(e.target.value)}
              >
                <option>Genre</option>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>
              </select>
            </div>
          )}
          <img src={movie.img} alt="" />
          <div className="info">
            {/* <img src={movie.imgTitle} alt="" /> */}
            <span className="desc">{movie.desc}</span>
            <div className="buttons">
              <button className="play">
                <PlayArrowIcon />
                <span>Play</span>
              </button>
              <button className="more">
                <InfoOutlinedIcon />
                <span>Info</span>
              </button>
            </div>
          </div>
        </div>
      );
    }
export default Featured;
