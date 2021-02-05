import React from 'react';

const MyInput = ({ value = '', onChange }) => (
    <input value={value} onChange={onChange} />
);

class Demo extends React.Component {
    state = {
        text: '',
    }

    onTextChange = (event) => {
        this.setState({ text: event.target.value });
    }

    onTextReset = () => {
        this.setState({ text: '' })
    }

    render() {
        return (
            <div>
                <MyInput value={this.state.text} onChange={this.onTextChange} />
                <button onClick={this.onTextReset}>Reset</button>
                <p onChange={this.onTextChange} >{this.state.text}</p>
            </div>
        );
    }
}
export default Demo;