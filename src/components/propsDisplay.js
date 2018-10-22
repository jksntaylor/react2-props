import React, {Component} from 'react'

export default class PropsDisplay extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.age}</p>
                {
                    this.props.hobbies.map((hobby, i) => {
                        return (
                        <p key={i}>{hobby}</p>
                        )
                    })
                }
                <button onClick={this.props.logger}>Click Me!</button>
                {this.props.inputValue}
                <input value={this.props.inputValue} onChange={(e) => this.props.handleChange(e.target.value)}></input>
            </div>
        )
    }
}