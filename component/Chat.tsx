"use client";
import { useState } from "react";
import { IoSend } from "react-icons/io5";

export default function ChatTool() {
  const [showWindow, setShowWindow] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_no: "",
    first_message: "",
  });

  const [messages, setMessages] = useState<any[]>([]);

  const startChat = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.contact_no ||
      !formData.first_message
    ) {
      alert("All fields are required");
      return;
    }

    // Add first message
    setMessages([
      ...messages,
      {
        name: formData.name,
        message: formData.first_message,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setShowForm(false);
    setShowChat(true);
  };

  const sendMessage = (e: any) => {
    e.preventDefault();
    const text = e.target.message.value;
    if (!text.trim()) return;

    setMessages([
      ...messages,
      {
        name: formData.name,
        message: text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    e.target.reset();
  };

  return (
    <div className="chat_tool">
      {/* Floating Button */}
      <button
        className="call_button"
        onClick={() => {
          setShowWindow(!showWindow);
          setShowWelcome(true);
          setShowForm(false);
          setShowChat(false);
          // console.log("click it");
        }}>
        <i className="fa fa-comments"></i>
      </button>

      {/* Main Chat Window */}
      {showWindow && (
        <div className="chat_window">
          {/* WELCOME PAGE */}
          {showWelcome && (
            <div className="welcome_page">
              <div className="chat_win_intro">
                <h3>Welcome to Chat Tool</h3>
                <p>
                  Search the Help Center or start a chat. We're here to help you
                  24x7.
                </p>
              </div>

              <div className="ch_theme_button">
                <button
                  className="gotoForm"
                  onClick={() => {
                    setShowWelcome(false);
                    setShowForm(true);
                    // console.log("clicked");
                  }}>
                  <IoSend className="n_con_icon" /> New Conversation
                </button>
              </div>
            </div>
          )}

          {/* USER FORM */}
          {showForm && (
            <div className="user_form">
              <div className="chat_header">
                <button
                  className="chat_back_button"
                  onClick={() => {
                    setShowForm(false);
                    setShowWelcome(true);
                  }}>
                  <i className="fa fa-angle-left"></i>
                </button>
              </div>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="user_form_inner">
                  <input
                    className="user_form_input"
                    type="text"
                    placeholder="Name"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <input
                    className="user_form_input"
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <input
                    className="user_form_input"
                    type="text"
                    placeholder="Contact No."
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, contact_no: e.target.value })
                    }
                  />
                  <textarea
                    className="user_form_input"
                    rows={3}
                    placeholder="write message here..."
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        first_message: e.target.value,
                      })
                    }></textarea>
                </div>

                <div className="ch_theme_button">
                  <button className="chatSMS" type="button" onClick={startChat}>
                    <IoSend /> Start Chat
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* CHAT WINDOW */}
          {showChat && (
            <div className="chat_con">
              <div className="chat_header">
                <button
                  className="chat_back_button"
                  onClick={() => {
                    setShowChat(false);
                    setShowWelcome(true);
                  }}>
                  <i className="fa fa-angle-left"></i>
                </button>
              </div>

              <div className="chat_con_body">
                <div className="chat_con_inner">
                  {messages.map((msg, i) => (
                    <div className="chat_messages visitor" key={i}>
                      <h3>{msg.name}</h3>
                      <p>{msg.message}</p>
                      <span>{msg.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="chat_footer">
                <form className="chat-form" onSubmit={sendMessage}>
                  <div className="chat_footer_inner">
                    <input
                      type="text"
                      name="message"
                      className="chat_reply_input"
                      placeholder="Write message here..."
                      required
                    />
                    <button className="chat_reply_submit">
                      <IoSend />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
