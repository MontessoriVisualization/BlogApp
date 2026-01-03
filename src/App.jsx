import { useState, useEffect } from "react";
import authService from "./appwrite/auth";

function App() {
  const [user, setUser] = useState(null);

  // console.log(process.env.React_APP_APPWRITE_URL);//works with create-react-app
  // console.log(import.meta.env.VITE_APPWRITE_URL); //works with Vite

  useEffect(() => {
    // Check if user is already logged in
    authService
      .getCurrentUser()
      .then((currentUser) => {
        if (currentUser) {
          setUser(currentUser);
        }
      })
      .catch((error) => {
        console.log("No user logged in:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>User: {user ? user.name : "Not logged in"}</h1>

      <button
        onClick={async () => {
          try {
            const newUser = await authService.createAccount({
              email: "maskby3kkkk21dd@gmail.com",
              password: "password123",
              name: "John Doebjbj",
            });
            console.log("User created:", newUser);
            const currentUser = await authService.getCurrentUser();
            setUser(currentUser);
          } catch (error) {
            console.error("Error creating account:", error);
          }
        }}
      >
        Create Account
      </button>

      <button
        onClick={async () => {
          await authService.googleLogin();
          // After redirect back, the useEffect will fetch the user
        }}
      >
        Login with Google
      </button>

      {user && (
        <button
          onClick={async () => {
            await authService.logout();
            setUser(null);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default App;
