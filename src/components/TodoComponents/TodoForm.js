import React from 'react';

export default class TodoForm extends React.Component {
    constructor (props) {
        super(props);
    }
    
    render () {
        const { todos, formTodo } = this.props;
        return (
            <div>
                {todos.map(item => (
                    <div key={item.id}>
                        {item.task}
                    </div>
                ))}
                {/* <form> */}
                    <input onChange={e => this.setState({
                        formTodo: e.target.value
                    })} value={formTodo} />
                    <button>Submit</button>
                {/* </form> */}
            </div>
        )
    }
}