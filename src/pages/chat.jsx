import React, { useEffect, useRef, useState } from "react";
import Messages from "../components/Messages";
import Form from "../components/Form";

function Chat() {
  const messageEndRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [showDots, setShowDots] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const content = e.target.message.value;

    setMessages((prev) => [
      ...prev,
      {
        id: prev[prev.length - 1] + 1,
        content: content,
        self: true,
      },
    ]);
    e.target.message.value = "";

    fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: content }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMessages((prev) => [
          ...prev,
          {
            id: prev[prev.length - 1] + 1,
            content: res.gptResponse,
            self: false,
          },
        ]);
      });
  }

  useEffect(() => {
    messageEndRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [messages]);

  return (
    <div className="chat">
      <Messages messages={messages} ref={messageEndRef} showDot={showDots} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default Chat;
