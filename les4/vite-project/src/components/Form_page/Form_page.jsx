import './Form_page.css'
import BG_form from '../../assets/images/form_bg.jpg'
import Form from '../Form/Form'

function Form_page(){
    return (
        <div className='form_page_container'>
            <img className='form_bg_img' src={BG_form}></img>
            <Form />
        </div>
    )
}

export default Form_page