import './Slider.css'
import BG from '../../assets/images/bg-image.png'
import Button_circle from '../Button_circle/Button_circle'
import Usual from '../../assets/images/Usual.svg'
import Slider_txt from '../Slider_txt/Slider_txt'
import Line from '../Lines/Lines'

function Slider(){
    return(
        <div className='slider_container'>
            <img className='bg_img' src={BG}></img>
            <div className='slider_text'>
                    <Button_circle type='Usual' svg={Usual}></Button_circle>
                    <Slider_txt/>
                    <Button_circle side='right_str' type='Usual' svg={Usual}></Button_circle>
            </div>
            <div className='lines'>
                <Line number='01'/>
                <Line number='02'/>
                <Line number='03'/>
                <Line number='04'/>
            </div>
        </div>
    )
}

export default Slider