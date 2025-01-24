import propTypes  from 'prop-types'

function Pratice(props){
return(
    <div>
        <p>name {props.name}</p>
        <p>age {props.age}</p>
        <p>Student {props.isStudent?"yes":"no"}</p>
    </div>
)
}
Pratice.propTypes = { 
    name:propTypes.string,
    age:propTypes.number,
    isStudent:propTypes.bool,
}
Pratice.defaultProps = {
    name:"guest",
    age:0,
    isStudent:false,

}
export default Pratice