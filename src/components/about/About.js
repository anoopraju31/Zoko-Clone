import { Company, Feature, TeamMember, Testimonials } from "../home/components/import"
import { BlogHeader } from "../blog/components/import"
import { UpdatedTechnology } from "./components/import"
import img1 from "../../img/about-img-2.jpg"
import img2 from "../../img/company-img.jpg"
import "./about.css"

const About = () => {
  return (
    <div>
      <BlogHeader title="About" />
      <div className="about_page">
        <Company img={img1} subHeading="About Us" />
        <Feature />
        <Company img={img2} subHeading="Our Company" />
        <UpdatedTechnology />
        <TeamMember />
        <Testimonials />
      </div>
    </div>
  )
}

export default About
