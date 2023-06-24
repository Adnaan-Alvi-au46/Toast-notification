import './button.css'

const Button = (props) => {
  // console.log(props.disabled)
  return (
    <button type={props.type} onClick={props.handleClick} className={`${"button "} ${props.className} `} disabled={props.disabled} >
        {props.children}
    </button>
  )
}

export default Button