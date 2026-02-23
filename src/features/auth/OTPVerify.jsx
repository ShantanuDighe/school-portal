import { useState } from "react";

function OTPVerify() {
  const [otp, setOtp] = useState("");

  return (
    <div className="auth-container">
      <h2>Verify OTP</h2>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button>Verify</button>
    </div>
  );
}

export default OTPVerify;
