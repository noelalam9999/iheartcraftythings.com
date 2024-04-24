import React, { useEffect, useRef, useState } from "react";
import Messages from "../components/Messages";
import Form from "../components/Form";
import { config } from "../config";

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
    setShowDots(true);
    fetch(`${config?.backendURL}/chat`, {
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
        setShowDots(false);
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
      <Messages messages={messages} ref={messageEndRef} showDots={showDots} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default Chat;
