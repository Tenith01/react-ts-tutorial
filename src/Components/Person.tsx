type personprops = {
    name:{
        first: string
        last: string
    }
}



export const Person = (props : personprops) => {
    return (
        <div>
            {props.name.first}{props.name.last}
        </div>)
}