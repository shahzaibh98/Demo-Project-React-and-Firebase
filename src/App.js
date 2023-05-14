import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "react-phone-input-2/lib/style.css";

import SignUp from "./pages/signup";
import SuccessLogin from "./pages/successLogin";

const App = () => {
  const [user, setUser] = useState(null);

  const handleUser = (user) => {
    console.log(user);
    setUser(user);
  };

  return (
    <section className="bg-blue-300 flex items-center justify-center h-screen">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? <SuccessLogin /> : <SignUp handleUser={handleUser} />}
      </div>
    </section>
  );
};

export default App;
