import * as React from 'react'

export class Hello extends React.Component<{ values: string[] }, {}> {
    public render() {
        return <>
            <h1>Hello world!</h1>
            <p>
                I am a dummy component to get you started :)<br />
                The following properties have been passed down to this component:
            </p>
            <ul>
                {
                    this.props.values.map((entry, index) =>
                        <li key={index}>{entry}</li>
                    )
                }
            </ul>
        </>
    }
}
