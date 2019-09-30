import React from 'react';

export default class TodoForm extends React.Component {
    constructor (props) {
        super(props);
    }
    
    render () {
        const { todos, handleChange, handleSubmit, formTodo, handleStaged } = this.props;
        return (
            <div>
                {todos.map(item => (
                    <div onClick={() => handleStaged(item)} key={item.id}>
                        {item.task}
                    </div>
                ))}
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={formTodo} />
                    <button type='submit' >Submit</button>
                </form>
            </div>
        )
    }
}