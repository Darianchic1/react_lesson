import "./Values.css";
import Value from "../Value/Value";
import Like from "../../assets/images/ic-like.svg";
import Hand from '../../assets/images/ic-hand.svg'
import Comfort from '../../assets/images/ic-slippers.svg'

function Values() {
  return (
    <div className="values_container">
      <p className="article">Our core values</p>
      <p className="mission">
        Our mission is to set the highest standards for construction sphere.
      </p>
      <div className="values">
        <Value
          svg={Like}
          name_value="Quality"
          discr_value="Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt."
        />
        <div className='vert_line'></div>
        <Value
          svg={Hand}
          name_value="Safety"
          discr_value="Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea."
        />
        <div className='vert_line'></div>
        <Value
          svg={Comfort}
          name_value="Comfort"
          discr_value="Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad."
        />
      </div>
    </div>
  );
}

export default Values;
