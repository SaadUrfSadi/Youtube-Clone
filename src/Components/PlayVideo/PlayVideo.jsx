import React from 'react';
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import dislike from "../../assets/dislike.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg"

function PlayVideo() {
  return (
    <>
    <div className="play-video">
        <video src={video1} controls autoPlay muted></video>
        <h3>Best Youtube Channel to learn Web Development</h3>
        <div className="play-video-info">
            <p>1524 Views &bull; 2 days ago </p>
            <div>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />3</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Coding ki duniya</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="video-description">
            <p>Channels that make learning Easy</p>
            <p>Subscribe Coding ki duniya to Watch More Tutorials on web development</p>
            <hr />
            <h4>130 Commennts</h4>
            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providng a variety of information and of interconnected networks using standarized communication protocols</p>
                    <div className="comment-action">
                        <img src={like} alt="" /> 
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
              <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providng a variety of information and of interconnected networks using standarized communication protocols</p>
                    <div className="comment-action">
                        <img src={like} alt="" /> 
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
              <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providng a variety of information and of interconnected networks using standarized communication protocols</p>
                    <div className="comment-action">
                        <img src={like} alt="" /> 
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
              <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providng a variety of information and of interconnected networks using standarized communication protocols</p>
                    <div className="comment-action">
                        <img src={like} alt="" /> 
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PlayVideo