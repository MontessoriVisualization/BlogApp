function App() {
  // console.log(process.env.React_APP_APPWRITE_URL);//works with create-react-app
  console.log(import.meta.env.VITE_APPWRITE_URL); //works with Vite
  return (
    <div className="App">
      <h1>Welcome to AppWrite Blog Post</h1>
    </div>
  );
}

export default App;
