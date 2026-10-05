import useFetch from "./hooks/useFetch";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/photos";

function App() {
  const { data, loading, error } = useFetch(API_URL);

  if (loading) {
    return (
      <div className="app">
        <h1>Photos</h1>
        <p className="status">Loading photos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <h1>Photos</h1>
        <p className="error">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Photos</h1>

      <div className="photo-container">
        {data &&
          data.map((photo) => (
            <div className="photo-card" key={photo.id}>
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
              />

              <p>{photo.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;