import './App.css';
import Header from './components/Header';
import Footer from './pages/Footer';
import Home from "./pages/Home";
import Search from './pages/Search';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from "./pages/Signin";
import Articles from './pages/Articles';
import TransferRumors from './pages/TransferRumors';
import Article1 from './pages/Article1';
import Article2 from './pages/Article2';
import Article3 from './pages/Article3';
import Article4 from './pages/Article4';
import Article5 from './pages/Article5';
import Article6 from './pages/Article6';
import ArticleDetail from './pages/ArticleDetail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './styles.css';
import AddArticle from './pages/AddArticle';

function App() {
  return (
    <Router>
      <div className="App dark light">
        <Routes>
          <Route path="/" element={[<Header />, <Home />, <Footer />]} />
          <Route path="/search" element={[<Header />, <Search />, <Footer />]} />
          <Route path="/profile" element={[<Header />, <Profile />, <Footer />]} />
          <Route path="/signup" element={[<Header />, <SignUp />, <Footer />]} />
          <Route path="/signin" element={[<Header />, <SignIn />, <Footer />]} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/Article1" element={[<Header />, <Article1 />, <Footer />]} /> {/* Dynamic route */}
          <Route path="/Article2" element={[<Header />, <Article2 />, <Footer />]} />
          <Route path="/Article3" element={[<Header />, <Article3 />, <Footer />]} />
          <Route path="/Article4" element={[<Header />, <Article4 />, <Footer />]} />
          <Route path="/Article5" element={[<Header />, <Article5 />, <Footer />]} />
          <Route path="/Article6" element={[<Header />, <Article6 />, <Footer />]} />
          <Route path="/transfer-rumors" element={<TransferRumors />} />
          <Route path="/add-article" element={<AddArticle />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
