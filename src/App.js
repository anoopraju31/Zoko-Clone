import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  About,
  Blog,
  BlogDetails,
  Contact,
  Error,
  Faq,
  Footer,
  GoTop,
  Home,
  Navbar,
  Price,
  PrivacyPolicy,
  SolutionDetail,
  Solutions,
  Team,
  TermsConditions,
} from "./components/import";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <GoTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="solutions/:userId" element={<SolutionDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path='/team' element={<Team />} />
          <Route path='/pricing' element={<Price />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-conditions' element={<TermsConditions />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
