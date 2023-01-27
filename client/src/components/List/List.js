import { useRef, useState } from 'react';
import './List.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from '../ListItem/Listitem';

function List(props) {
    const list = props.list;

    const [slideNumber, setSlideNumber] = useState(0);

    // to show arrow buttons only when there is something on it's left or not
    const [isMoved, setIsMoved] = useState(false);

    // to target list container -- will work same as querySelector or selecybyId  
    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        // to get exact distance 
        let distance = listRef.current.getBoundingClientRect();
        // console.log(distance);
        distance = distance.x - 50; //-50 bec there was margin-left
        // console.log(distance);

        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === 'right' && slideNumber < 5)
        // 5 bec 5 list-items in row visible and total 10 items
        {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

    return (
        <div className='list'>
            <p className="listTitle">{list.title}</p>
            <div className="wrapper">
                <ArrowBackIosIcon className='slider-arrow left' onClick={() => handleClick("left")} style={{ display: !isMoved && 'none' }} />
                <div className="list-container" ref={listRef}>

                    {list.content.map((itemId, i) => (
                        <div key = {i}>
                            {/* sending ID of movies */}
                            <ListItem index={i} itemId={itemId} />
                        </div >
                    ))}

                </div>
                <ArrowForwardIosIcon className='slider-arrow right' onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List;
