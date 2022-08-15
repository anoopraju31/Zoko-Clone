import "./serviceSection.css";
import { Card } from "./components/import";
import { services } from "./util";

const ServiceSection = () => {
  return (
    <div className="serviceSection container">
      <div className="serviceSection__header">
        <p className="first"> Smart Sevices</p>
        <h1> Provide All Kind Of Tech Solutions </h1>
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates doloremque nesciunt consequuntur nulla fugit voluptate molestiae perspiciatis sunt sed ex harum, veniam beatae aliquid assumenda optio voluptatibus veritatis voluptatum in repellendus quam? A voluptate voluptatibus tempora pariatur mollitia dicta, nam aperiam odit adipisci, repellendus necessitatibus cumque facilis hic consequuntur, obcaecati ad reprehenderit architecto. Cupiditate itaque, possimus alias officia dignissimos consectetur dolore suscipit autem quam? Blanditiis distinctio necessitatibus perspiciatis fugiat ducimus. Sunt hic aut, pariatur culpa, at ex debitis nisi a, maiores quaerat dignissimos corrupti itaque. Pariatur beatae, officia assumenda ea ab amet iure animi porro reprehenderit repellat dolorem temporibus consequatur! </p>
      </div>

      <div className="serviceSection__serviceContainer">
        {services.map(({ serviceName, desc, img, path }, idx) => (
          <Card name={serviceName} desc={desc} img={img} path={path} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
