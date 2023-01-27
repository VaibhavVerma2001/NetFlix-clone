import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

export default function WidgetSm() {
  const [newUsers,setNewusers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users?new=true",{
          headers: {
            token:
                "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2JhY2NlZDk4YTZjZmFlMmU0MmNjNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDMyMTYwMywiZXhwIjoxNjc0NzUzNjAzfQ.7hFDwb3XJeb3CVuH0YYBllFSNlcSuIJqOJl-H3RM-_g"
        },
        });
        // console.log(res.data);
        setNewusers(res.data);
        
      } catch (err) {
        console.log(err);
      }
    }
    getNewUsers();
  }, []);

   return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}