function Count(){
    return 4+5;
}
function Country(props){
     return <span>{props.country} and City is { props.city }  Count: <Count /></span>
}

export default function Hello(props){
    return (
        <span>Hello { props.name} with components <Country country={props.country} city="Tangail" /></span>
    )
}