import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import OtpInput from "otp-input-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase.config";

const SignUp = ({ handleUser }) => {
  const [ph, setPh] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [loading, setLoading] = useState(false);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        handleUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        handleUser(null);
      });
  }

  return (
    <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
      <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
        Welcome to Firebase OTP Login
      </h1>
      {showOTP ? (
        <>
          <div className="bg-white text-blue-300 w-fit mx-auto p-4 rounded-full">
            <BsFillShieldLockFill size={30} />
          </div>
          <label
            htmlFor="otp"
            className="font-bold text-xl text-white text-center"
          >
            Enter your OTP
          </label>
          <OtpInput
            value={otp}
            onChange={setOtp}
            OTPLength={6}
            otpType="number"
            disabled={false}
            autoFocus
            className="opt-container"
          />
          <button
            onClick={onOTPVerify}
            className="bg-blue-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
          >
            {loading && <CgSpinner size={20} className="mt-1 animate-spin" />}
            <span>Verify OTP</span>
          </button>
        </>
      ) : (
        <>
          <div className="bg-white text-blue-300 w-fit mx-auto p-4 rounded-full">
            <BsTelephoneFill size={30} />
          </div>
          <label
            htmlFor=""
            className="font-bold text-xl text-white text-center"
          >
            Verify your phone number
          </label>
          <PhoneInput country={"pk"} value={ph} onChange={setPh} />
          <button
            onClick={onSignup}
            className="bg-blue-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
          >
            {loading && <CgSpinner size={20} className="mt-1 animate-spin" />}
            <span>Send code via SMS</span>
          </button>
        </>
      )}
    </div>
  );
};

export default SignUp;
