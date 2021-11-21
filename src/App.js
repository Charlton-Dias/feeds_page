import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import PostContextProvider from "./contexts/PostContext";
import PostsFeed from "./components/PostsFeed";

export default function App() {
  return (
    <PostContextProvider>
      <div className="App">
        <PostsFeed />
      </div>
    </PostContextProvider>
  );
}
