function Messages() {
  return (
    <div className="messages-container">
      <div className="chat-list">
        <p>Math Teacher</p>
        <p>Class Teacher</p>
      </div>

      <div className="chat-window">
        <div className="message received">Hello Parent 👋</div>
        <div className="message sent">Thank you ma'am</div>

        <input placeholder="Type message..." />
      </div>
    </div>
  );
}

export default Messages;
