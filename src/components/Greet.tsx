type GreetProps = {
    name: string
}


export const Greet  = (props: GreetProps) => {
    return(
        <h1>Welcome {props.name}! You have 10 unread messages</h1>
    )
}