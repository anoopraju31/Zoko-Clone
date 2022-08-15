import { DropDown } from "./component/import";
import chooseImg from "../../../../img/choose-img.png";
import "./choose.css";

const Choose = () => {
  return (
    <div className="choose container">
      <div className="choose__header">
        <p className="first"> Why Choose Us </p>
        <h2>We Achieved People&#39;s Trust By Our Great Service</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperiam provident soluta, asperiores voluptates error pariatur dignissimos neque? Ab vero quisquam repudiandae consequatur doloribus laborum optio, assumenda minima sequi explicabo. Nobis, dolor tempora facilis numquam iure nemo sint minima et magnam vel? Explicabo aperiam tenetur porro a itaque voluptates deserunt, earum voluptatum atque rerum eaque asperiores, eum esse ea odio magnam minima molestias magni praesentium similique tempore? Officia vero sed accusamus dolor nobis dolore voluptatem non corporis veniam nostrum, voluptatum id molestias quaerat praesentium voluptatibus maxime saepe autem aliquid nemo architecto, dicta voluptate doloribus. Totam iusto mollitia repellendus debitis nihil!
        </p>
      </div>

      <div className="choose__body">
        <div className="choose__img">
          <img src={chooseImg} alt="" />
        </div>

        <div className="choose__container">
          <DropDown
            idx={0}
            Que="Great Understanding"
            Ans="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperiam provident soluta, asperiores voluptates error pariatur dignissimos neque?"
          />
          <DropDown
            idx={1}
            Que="Update Technology"
            Ans="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperiam provident soluta, asperiores voluptates error pariatur dignissimos neque?"
          />
          <DropDown
            idx={2}
            Que="Experienced Team"
            Ans="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperiam provident soluta, asperiores voluptates error pariatur dignissimos neque?"
          />
          <DropDown
            idx={3}
            Que="Best Quality Service"
            Ans="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperiam provident soluta, asperiores voluptates error pariatur dignissimos neque? "
          />
        </div>
      </div>
    </div>
  );
};

export default Choose;
