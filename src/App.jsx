import authService from "./appwrite/auth";
function App() {
  // console.log(process.env.React_APP_APPWRITE_URL);//works with create-react-app
  console.log(import.meta.env.VITE_APPWRITE_URL); //works with Vite
  return (
    <div className="App">
      <h1>Welcome to AppWrite Blog Post</h1>
      <button
        onClick={() => {
          const user = authService.createAccount({
            email: "usevhvhvr@example.com",
            password: "password123",
            name: "John Doebjbj",
          });
          console.log("User created:", user);
        }}
      >
        Create Account
      </button>
    </div>
  );
}

export default App;
