import React, { useContext, useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const { onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input
  } = useContext(Context);


  return (
    <div className='main'>
      <div className="nav">
        <p>OmieAi</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {showResult
          ? <div className="result">
            <div className='result-title'>
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
                ? <div className="loader">
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                </div>
                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>

          </div>
          : <>
            <div className="greet">
              <p><span>Hello,&#128075;</span></p>
              <p>Feel free to ask!</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest some famous maountains&#9968;</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Project ideas&#128564;</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Act like a teacher&#129299;</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Explain the following code&#128187;</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        }



        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Ask here' />
            <div>
              <img src={assets.gallery_icon} width={30} alt="" />
              <img src={assets.mic_icon} width={30} alt="" />
              {input ? <img onClick={() => onSent()} src={assets.send_icon} width={30} alt="" /> : null}
            </div>
          </div>
          <p className="bottom-info">
          Disclaimer: This AI chatbot, created by Omkar, is currently in the development stage and is still being refined. Some buttons and features may not be fully functional at this time.           </p>
      </div>
      </div>
    </div>
  )
}

export default Main
