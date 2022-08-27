import './styles.css'

export const Button = (props) => (
    <div className='btn_display'>
        <button 
            disabled={props.disabled}
            onClick={props.handleClick} 
            className="btn">
                {props.btnText}
        </button>
    </div>
)