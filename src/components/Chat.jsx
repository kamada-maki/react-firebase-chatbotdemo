import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from "../assets/img/no-profile.png";
import supportIcon from "../assets/img/job_call_center.png";

const Chat = (props) =>{
  const isQuestion = (props.type === "question");
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";
  return(
    <ListItem className = {classes}>
      <div className='first'>
        <ListItemAvatar>
          {isQuestion ? (
            <Avatar alt="icon" src={supportIcon} />
          ):(
            <Avatar alt="icon" src={NoProfile} />
          )}
        </ListItemAvatar>
      </div>
    <div className="p-chat__bubble">{props.text}</div>
  </ListItem>
  )
}

export default Chat