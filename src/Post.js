
import React, {forwardRef} from 'react';
import { Avatar } from '@material-ui/core';
import RepeatIcon from '@material-ui/icons/Repeat';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'; 
import PublishIcon from '@material-ui/icons/Publish';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import './Post.css';

const Post = forwardRef(({
    displayName,
     username,
      verified,
       avatar,
        image,
         text}, ref) => {
    // displayName
    // username,
    // VerifiedUser,
    // timestamp
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar alt="Cindy Baker" src={avatar} />
            </div> 
            <div className="post__body">
                <div class="post__header">
                    <div class="post__headerText">
                        <h3>{displayName} {" "}
                            <span className="post__headerSpecial">
                                {verified &&<CheckCircleOutlineIcon className="post__badge" />}{" "}
                            @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="Gif" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </div>
    )
});

export default Post
