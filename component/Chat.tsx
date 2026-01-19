// "use client";
// import { useState } from "react";
// import { IoSend } from "react-icons/io5";

// export default function ChatTool() {
//   const [showWindow, setShowWindow] = useState(false);
//   const [showWelcome, setShowWelcome] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [showChat, setShowChat] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact_no: "",
//     first_message: "",
//   });

//   const [messages, setMessages] = useState<any[]>([]);

//   const startChat = () => {
//     if (
//       !formData.name ||
//       !formData.email ||
//       !formData.contact_no ||
//       !formData.first_message
//     ) {
//       alert("All fields are required");
//       return;
//     }

//     // Add first message
//     setMessages([
//       ...messages,
//       {
//         name: formData.name,
//         message: formData.first_message,
//         time: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       },
//     ]);

//     setShowForm(false);
//     setShowChat(true);
//   };

//   const sendMessage = (e: any) => {
//     e.preventDefault();
//     const text = e.target.message.value;
//     if (!text.trim()) return;

//     setMessages([
//       ...messages,
//       {
//         name: formData.name,
//         message: text,
//         time: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       },
//     ]);

//     e.target.reset();
//   };

//   return (
//     <div className="chat_tool">
//       {/* Floating Button */}
//       <button
//         className="call_button"
//         onClick={() => {
//           setShowWindow(!showWindow);
//           setShowWelcome(true);
//           setShowForm(false);
//           setShowChat(false);
//           // console.log("click it");
//         }}>
//         <i className="fa fa-comments"></i>
//       </button>

//       {/* Main Chat Window */}
//       {showWindow && (
//         <div className="chat_window">
//           {/* WELCOME PAGE */}
//           {showWelcome && (
//             <div className="welcome_page">
//               <div className="chat_win_intro">
//                 <h3>Welcome to Chat Tool</h3>
//                 <p>
//                   Search the Help Center or start a chat. We're here to help you
//                   24x7.
//                 </p>
//               </div>

//               <div className="ch_theme_button">
//                 <button
//                   className="gotoForm"
//                   onClick={() => {
//                     setShowWelcome(false);
//                     setShowForm(true);
//                     // console.log("clicked");
//                   }}>
//                   <IoSend className="n_con_icon" /> New Conversation
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* USER FORM */}
//           {showForm && (
//             <div className="user_form">
//               <div className="chat_header">
//                 <button
//                   className="chat_back_button"
//                   onClick={() => {
//                     setShowForm(false);
//                     setShowWelcome(true);
//                   }}>
//                   <i className="fa fa-angle-left"></i>
//                 </button>
//               </div>

//               <form onSubmit={(e) => e.preventDefault()}>
//                 <div className="user_form_inner">
//                   <input
//                     className="user_form_input"
//                     type="text"
//                     placeholder="Name"
//                     required
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                   />
//                   <input
//                     className="user_form_input"
//                     type="email"
//                     placeholder="Email"
//                     required
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                   />
//                   <input
//                     className="user_form_input"
//                     type="text"
//                     placeholder="Contact No."
//                     required
//                     onChange={(e) =>
//                       setFormData({ ...formData, contact_no: e.target.value })
//                     }
//                   />
//                   <textarea
//                     className="user_form_input"
//                     rows={3}
//                     placeholder="write message here..."
//                     required
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         first_message: e.target.value,
//                       })
//                     }></textarea>
//                 </div>

//                 <div className="ch_theme_button">
//                   <button className="chatSMS" type="button" onClick={startChat}>
//                     <IoSend /> Start Chat
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}

//           {/* CHAT WINDOW */}
//           {showChat && (
//             <div className="chat_con">
//               <div className="chat_header">
//                 <button
//                   className="chat_back_button"
//                   onClick={() => {
//                     setShowChat(false);
//                     setShowWelcome(true);
//                   }}>
//                   <i className="fa fa-angle-left"></i>
//                 </button>
//               </div>

//               <div className="chat_con_body">
//                 <div className="chat_con_inner">
//                   {messages.map((msg, i) => (
//                     <div className="chat_messages visitor" key={i}>
//                       <h3>{msg.name}</h3>
//                       <p>{msg.message}</p>
//                       <span>{msg.time}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="chat_footer">
//                 <form className="chat-form" onSubmit={sendMessage}>
//                   <div className="chat_footer_inner">
//                     <input
//                       type="text"
//                       name="message"
//                       className="chat_reply_input"
//                       placeholder="Write message here..."
//                       required
//                     />
//                     <button className="chat_reply_submit">
//                       <IoSend />
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import type React from "react";
import { useState } from "react";

interface ChatMessage {
  id: number;
  sender: string;
  message: string;
  time: string;
  isVisitor: boolean;
}

interface UserFormData {
  username: string;
  useremail: string;
  usercontact_no: string;
  userfirst_message: string;
}

export default function ChatTool() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"welcome" | "form" | "chat">(
    "welcome",
  );
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [userForm, setUserForm] = useState<UserFormData>({
    username: "",
    useremail: "",
    usercontact_no: "",
    userfirst_message: "",
  });
  const [userName, setUserName] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !userForm.username ||
      !userForm.useremail ||
      !userForm.usercontact_no ||
      userForm.userfirst_message
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setUserName(userForm.username);

    // Add initial message
    const initialMessage: ChatMessage = {
      id: Date.now(),
      sender: userForm.username,
      message: `Name: ${userForm.username}\nEmail: ${
        userForm.useremail
      }\nContact No: ${userForm.usercontact_no}${
        userForm.userfirst_message ?
          `\nMessage: ${userForm.userfirst_message}`
        : ""
      }`,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isVisitor: true,
    };

    setMessages([initialMessage]);
    setCurrentView("chat");
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentMessage.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now(),
      sender: userName,
      message: currentMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isVisitor: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    setCurrentMessage("");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="page-wraper">
      <div className="chat_tool">
        <div
          className="chat_window"
          style={{ display: isOpen ? "flex" : "none" }}>
          {/* // style={{ display: "block" }}> */}
          {/* Welcome Page */}
          {currentView === "welcome" && (
            <div className="welcome_page">
              <div className="chat_win_intro">
                <h3>Welcome to Chat Tool</h3>
                <p>
                  Search the Help Center or start a chat. We&apos;re here to
                  help you 24x7.
                </p>
              </div>
              <div className="ch_theme_button">
                <button onClick={() => setCurrentView("form")}>
                  <i className="fa fa-send"></i>
                  New Conversation
                </button>
              </div>
            </div>
          )}

          {/* User Form */}
          {currentView === "form" && (
            <div
              className="user_form"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}>
              <div className="chat_header">
                <div className="chat_header_inner">
                  <button
                    className="chat_back_button"
                    onClick={() => setCurrentView("welcome")}
                    title="Back">
                    <i className="fa fa-angle-left"></i>
                  </button>
                </div>
              </div>
              <form onSubmit={handleFormSubmit}>
                <div className="user_form_inner">
                  <div className="fieldrow">
                    <input
                      className="user_form_input"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={userForm.username}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="fieldrow">
                    <input
                      className="user_form_input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={userForm.useremail}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="fieldrow">
                    <input
                      className="user_form_input"
                      type="text"
                      name="contact_no"
                      placeholder="Contact No."
                      value={userForm.usercontact_no}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="fieldrow">
                    <textarea
                      className="user_form_input"
                      name="first_message"
                      rows={3}
                      placeholder="write message here..."
                      value={userForm.userfirst_message}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="ch_theme_button">
                  <button type="submit">
                    <i className="fa fa-send"></i>
                    Start Chat
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Chat Conversation */}
          {currentView === "chat" && (
            <div className="chat_con" style={{ display: "flex" }}>
              <div className="chat_header">
                <div className="chat_header_inner">
                  <button
                    className="chat_back_button"
                    onClick={() => setCurrentView("welcome")}
                    title="Back">
                    <i className="fa fa-angle-left"></i>
                  </button>
                </div>
              </div>
              <div className="chat_con_body">
                <div className="chat_con_inner">
                  {messages.map((message) => (
                    <div key={message.id}>
                      <div
                        className={`chat_messages ${
                          message.isVisitor ? "visitor" : ""
                        }`}>
                        <h3>{message.sender}</h3>
                        <p style={{ whiteSpace: "pre-line" }}>
                          {message.message}
                        </p>
                        <span>{message.time}</span>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="chat_footer">
                <form className="chat-form" onSubmit={handleSendMessage}>
                  <div className="chat_footer_inner">
                    <input
                      type="text"
                      className="chat_reply_input"
                      placeholder="Write message here..."
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      required
                    />
                    <button
                      className="chat_reply_submit"
                      type="submit"
                      title="Submit">
                      <i className="fa fa-send"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        <button className="call_button" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa fa-comments"></i>
        </button>
      </div>
    </div>
  );
}
