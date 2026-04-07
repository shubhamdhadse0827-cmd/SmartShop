import React, { useState } from "react";
import "./Assistent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const Assistent = () => {

  const [open,setOpen] = useState(false);

  return (
    <div className="assistant">

      <div className="chat-button" onClick={()=>setOpen(!open)}>

        <FontAwesomeIcon 
          icon={faComment}
          style={{
            color:"rgb(255,65,65)"
          }}
        />

      </div>

      {/* Chat Popup */}
      {open && (
        <div className="chat-box">

          <div className="chat-header">
            SmartShop Assistant
          </div>

          <div className="chat-body">
            <p>👋 Hi! How can I help you today?</p>
            <p>• Track Order</p>
            <p>• Return Product</p>
            <p>• Payment Help</p>
          </div>

          <div className="chat-input">
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
          </div>

        </div>
      )}

    </div>
  );
};

export default Assistent;