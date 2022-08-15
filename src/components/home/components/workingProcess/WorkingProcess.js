import "./workingProcess.css";
import { ProcessCard } from "./components/import";
import processImg1 from "../../../../img/process1.png";
import processImg2 from "../../../../img/process2.png";
import processImg3 from "../../../../img/process3.png";
import processImg4 from "../../../../img/process4.png";

const WorkingProcess = () => {
  return (
    <div className="workingProcess">
      <div className="workingProcess__container container">
        <div className="workingProcess__header">
          <p className="first"> Working Process </p>
          <h2> We Are Popular Because Of Our Way Of Working </h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officia at dicta voluptatem recusandae repellendus itaque eos excepturi. Voluptatum error facere ut et quos. Nulla molestias illo aliquid! Sequi laborum voluptatum alias dolore deleniti ab sapiente earum magni soluta consequatur minus minima in tenetur iste eligendi accusantium, nobis inventore. Eos ipsum provident commodi illum, aspernatur minima, quam consectetur voluptatem et qui excepturi ab minus culpa mollitia, asperiores placeat modi id cupiditate. Vitae est dicta ipsam eius dolore commodi. Voluptatum maxime totam, aliquam dolorum officia fugit quae? Libero eligendi accusamus esse unde nam natus porro ad ipsum eveniet, suscipit exercitationem praesentium. </p>
        </div>

        <div className="workingProcess__processes">
          <ProcessCard
            title="Design"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            processImg={processImg1}
          />
          <ProcessCard
            title="Development"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            processImg={processImg3}
          />
          <ProcessCard
            title="Testing"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            processImg={processImg2}
          />
          <ProcessCard
            last
            title="Deployment"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            processImg={processImg4}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
