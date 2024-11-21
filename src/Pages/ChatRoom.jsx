import { useState, useEffect } from "react";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [activeUsers, setActiveUsers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [featureRequests, setFeatureRequests] = useState([]);
  const [reactions, setReactions] = useState({});
//   const [statusTracking, setStatusTracking] = useState({});

  // Simulate real-time messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: "User", content: "New message at " + new Date().toLocaleTimeString() },
      ]);
    }, 5000); // Add a new message every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Simulate user presence
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers((prevUsers) => [
        ...prevUsers,
        "User " + (prevUsers.length + 1),
      ]);
    }, 10000); // Add a new user every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages((prev) => [...prev, { user: "You", content: message }]);
      setMessage("");
    }
  };

  const addReaction = (msgIndex) => {
    setReactions((prev) => ({
      ...prev,
      [msgIndex]: (prev[msgIndex] || 0) + 1,
    }));
  };

  const postQuestion = (question) => {
    setQuestions((prev) => [...prev, { question, answers: [] }]);
  };

  const addAnswer = (questionIndex, answer) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers.push(answer);
    setQuestions(updatedQuestions);
  };

  const submitFeatureRequest = (request) => {
    setFeatureRequests((prev) => [
      ...prev,
      { request, votes: 0, status: "Pending" },
    ]);
  };

  const voteFeatureRequest = (requestIndex) => {
    const updatedRequests = [...featureRequests];
    updatedRequests[requestIndex].votes += 1;
    setFeatureRequests(updatedRequests);
  };

  const updateFeatureStatus = (requestIndex, status) => {
    const updatedRequests = [...featureRequests];
    updatedRequests[requestIndex].status = status;
    setFeatureRequests(updatedRequests);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tutor Chat Room</h1>

      {/* Real-time Chat */}
      <div className="border p-4 mb-4 max-h-[300px] overflow-y-auto">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-3">
            <p className="font-bold">{msg.user}:</p>
            <p>{msg.content}</p>
            <button
              onClick={() => addReaction(idx)}
              className="bg-gray-200 px-2 py-1 rounded mt-1"
            >
              👍 {reactions[idx] || 0}
            </button>
          </div>
        ))}
      </div>

      {/* Input to send message */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 w-full mb-2"
        placeholder="Type a message..."
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
      >
        Send
      </button>

      {/* Active Users */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Active Users</h2>
        <ul>
          {activeUsers.map((user, idx) => (
            <li key={idx}>{user}</li>
          ))}
        </ul>
      </div>

      {/* Teaching Q&A Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Teaching Q&A</h2>
        <button
          onClick={() => postQuestion("What is React?")}
          className="bg-green-500 text-white p-2 rounded-lg mt-2"
        >
          Post a Question
        </button>
        {questions.map((q, idx) => (
          <div key={idx} className="mt-4 p-4 border bg-gray-50 rounded">
            <p className="font-semibold">{q.question}</p>
            <div className="mt-2">
              {q.answers.map((answer, idx) => (
                <p key={idx} className="text-gray-700">{answer}</p>
              ))}
              <button
                onClick={() => addAnswer(idx, "This is an answer to the question.")}
                className="bg-blue-500 text-white p-2 rounded-lg mt-2"
              >
                Add Answer
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Wishlist */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Feature Wishlist</h2>
        <button
          onClick={() => submitFeatureRequest("Feature 1: Real-time notifications")}
          className="bg-yellow-500 text-white p-2 rounded-lg mt-2"
        >
          Submit Feature Request
        </button>
        {featureRequests.map((request, idx) => (
          <div key={idx} className="mt-4 p-4 border bg-gray-50 rounded">
            <p className="font-semibold">{request.request}</p>
            <p>Status: {request.status}</p>
            <button
              onClick={() => voteFeatureRequest(idx)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
            >
              Vote ({request.votes})
            </button>
            <button
              onClick={() => updateFeatureStatus(idx, "In Progress")}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-2 ml-2"
            >
              In Progress
            </button>
            <button
              onClick={() => updateFeatureStatus(idx, "Completed")}
              className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2 ml-2"
            >
              Completed
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatRoom;
