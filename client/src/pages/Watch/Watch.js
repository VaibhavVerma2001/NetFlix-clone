import './Watch.scss';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import WatchMovie from './watch-movie.mp4';
import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Watch() {
    let location = useLocation();
    location = location.pathname;
    const movieId = location.split('/')[2];
    // console.log(movieId);

    // take trailer of that movie id here
    // eslint-disable-next-line
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/movies/find/" + movieId, {
                    headers: {
                        token:
                            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2JhY2NlZDk4YTZjZmFlMmU0MmNjNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDMyMTYwMywiZXhwIjoxNjc0NzUzNjAzfQ.7hFDwb3XJeb3CVuH0YYBllFSNlcSuIJqOJl-H3RM-_g"
                    },
                });
                // console.log(res.data);
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMovie();
    }, [movieId]);

    return (
        <div className='watch'>
            <Link to='/'>
                <div className="back">
                    <ArrowBackOutlinedIcon />
                    Home
                </div>
            </Link>

            <video
                className="video"
                autoPlay
                progress="true"
                controls
                src={WatchMovie}
            />

        </div>
    )
}

export default Watch;
