

export default function CustomButton(props){
    return (
        <button className={props.style}>
           {props.btnText}
        </button>
    )
}