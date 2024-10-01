import "./Slider_txt.css";
import Button_sq from "../Button_sq/Button_sq";

function Slider_txt() {
  return (
    <div className='text_container'>
      <p className="name">
        CREATE<span>X</span> CONSTRUCTION
      </p>
      <p className="discription">
        Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat,
        dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget
        pellentesque integer ipsum elementum felis.
      </p>
      <div className='buttons'>
        <Button_sq action='LEARN MORE ABOUT US' type='Usual_sq'/>
        <Button_sq action='SUBMIT REQUEST' type='Accent_sq'/>
      </div>
    </div>
  );
}

export default Slider_txt;
