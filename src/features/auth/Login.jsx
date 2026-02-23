import { useState } from "react";

function Login() {
  const [phone, setPhone] = useState("");

  const handleSendOTP = () => {
    console.log("OTP sent to", phone);
  };

  return (
    <div className="auth-container">
      <h2>Login to School Portal</h2>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSendOTP}>Send OTP</button>
    </div>
  );
}

export default Login;
