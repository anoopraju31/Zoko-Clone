import {
  Blog,
  CaseStudy,
  Choose,
  Company,
  Contact,
  Feature,
  HeroSection,
  ServiceSection,
  TeamMember,
  Testimonials,
  WorkingProcess,
} from "./components/import";
import img1 from "../../img/company-img.jpg";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <ServiceSection />
      <Company img={img1} subHeading="Our Company" bg />
      <Choose />
      <WorkingProcess />
      {/* <CaseStudy /> */}
      <Feature />
      {/* <TeamMember />  */}
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Contact />
    </div>
  );
};

export default Home;
