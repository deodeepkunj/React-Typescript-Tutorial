type GreetProps = {
    name: string,
    messageCount: number,
}


export const Greet  = (props: GreetProps) => {
    return(
        <h1>Welcome {props.name}! You have {props.messageCount} unread messages</h1>
    )
}