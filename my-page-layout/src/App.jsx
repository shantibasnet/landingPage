import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Advertisement from "./Advertisement";

function App() {
  return (
    <div>
      <Header />
      <Hero
        title="Welcome to our website"
        subtitle="Discover amazing content"
        backgroundColor="#f0f0f0"
      />
      <Hero
        title="New arrivals"
        subtitle="Check out our latest products"
        backgroundColor="#ffcc00"
      />
      <Advertisement />
      <Footer />
    </div>
  );
}

export default App;
