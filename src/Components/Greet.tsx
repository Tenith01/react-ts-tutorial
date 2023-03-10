type GreetProps = {
    name: string
    messageCount: number

    isLoggedIn: boolean
}


export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h1>
                {
                    props.isLoggedIn ? 'Welcome {props.name}! You have {props.messageCount} unread messages' : 'welcome guest'
                }
            </h1>
        </div>
    )
}