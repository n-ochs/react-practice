import React, { PureComponent } from 'react'

class FAQ extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>FAQ</h1>
                </div>
                <div>
                    <ul>
                        <li>Question</li>
                        <li>Answer</li>
                    </ul>
                    <ul>
                        <li>Question</li>
                        <li>Answer</li>
                    </ul>
                    <ul>
                        <li>Question</li>
                        <li>Answer</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default FAQ