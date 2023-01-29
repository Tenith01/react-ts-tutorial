type HeadingProps = {
    children: string
}

export const Heading = (props: HeadingProps) => {
    return <h2 color={'red'}>{props.children}</h2>
}