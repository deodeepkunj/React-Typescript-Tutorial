type personProps = {
    name: {
        first: string
        last: string
    }
}


export const Person = (props: personProps) => {
    return (

        <h3>{props.name.first} {props.name.last}</h3>
    )
}