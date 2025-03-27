import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/HomePage"

function App() {

  return (
    <>
      <div className="container">
        <HomePage title={"Hello, welcome to face-ai-project with Typescript!"} 
                  subtitle={"You can view some of your favorite celebrity here."}>
            Surely, our app is fun.
        </HomePage>
      </div>
    </>
  );
}

export default App;
