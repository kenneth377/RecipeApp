import React from 'react'
import "./styles/community.css"
import comimg from "./community.svg"
import comstars from "./comstars.svg"

export default function Community() {
  return (
    <div className='community'>
      <h1>From Our Community</h1>
      <div className="communitybox">
        <div>
            <div className="comboxintro">
                <div className="introavatar"></div>
                <div className="intro">
                    <h3>Spaghetti Bolognesse</h3>
                    <p>Lady Rudy</p>
                </div>
            </div>
            <div className="comboxmessage">
                <img src={comstars} alt="stars" className="stars"/>
                <p className="messagetext">I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I've always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home.</p>
            </div>
            <div className="comboximg"><img src={comimg} alt="comimage" /></div>
            <div className="comboxbtns">
                <div className="likes">4</div>
                <div className="share">Share</div>
            </div>
        </div>
        <div>
            <div className="comboxintro">
                <div className="introavatar"></div>
                <div className="intro">
                    <h3>Spaghetti Bolognesse</h3>
                    <p>Lady Rudy</p>
                </div>
            </div>
            <div className="comboxmessage">
                <img src={comstars} alt="stars" className="stars"/>
                <p className="messagetext">I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I've always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home.</p>
            </div>
            <div className="comboximg"><img src={comimg} alt="comimage" /></div>
            <div className="comboxbtns">
                <div className="likes">4</div>
                <div className="share">Share</div>
            </div>
        </div>
        <div>
            <div className="comboxintro">
                <div className="introavatar"></div>
                <div className="intro">
                    <h3>Spaghetti Bolognesse</h3>
                    <p>Lady Rudy</p>
                </div>
            </div>
            <div className="comboxmessage">
                <img src={comstars} alt="stars" className="stars"/>
                <p className="messagetext">I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I've always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home.</p>
            </div>
            <div className="comboximg"><img src={comimg} alt="comimage" /></div>
            <div className="comboxbtns">
                <div className="likes">4</div>
                <div className="share">Share</div>
            </div>
        </div>
        <div>
            <div className="comboxintro">
                <div className="introavatar"></div>
                <div className="intro">
                    <h3>Spaghetti Bolognesse</h3>
                    <p>Lady Rudy</p>
                </div>
            </div>
            <div className="comboxmessage">
                <img src={comstars} alt="stars" className="stars"/>
                <p className="messagetext">I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I've always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home.</p>
            </div>
            <div className="comboximg"><img src={comimg} alt="comimage" /></div>
            <div className="comboxbtns">
                <div className="likes">4</div>
                <div className="share">Share</div>
            </div>
        </div>
      </div>

    <div className="comnavigate">
        <div className="navipos"></div>
        <div className="navibtns">
            <a href="" className="forward">&lt;</a>
            <a href="" className="backward">&gt;</a>
        </div>
    </div>
    </div>
  )
}
