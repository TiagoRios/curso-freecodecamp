import { useState } from 'react';

// Faz o mesmo que DisplayMessages.
export default function DisplayMessagesFunction(props) {
    const [input, setInput] = useState('');
    // const [messages, setMessages] = useState([]);

    // Equivalencia ao código com componentes de classe.
    // const [state, setState] = useState({
    //     input: '',
    //     messages: []
    // })

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const submitMessage = () => {
        const prevInput = input;
        setInput('')
        // setMessages(messages.concat(prevInput))

        props.submitNewMessage(prevInput);
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <h2>Type in a new Message:</h2>

            <input
                value={input}
                onChange={handleChange} /><br />

            <button onClick={submitMessage}>Submit</button>

            <ul>
                {/* {messages.map((message, idx) => (
              <li key={idx}>{message}</li>)
            )} */}
                {props.messages.map((message, index) => (
                    <li key={index}>{message}</li>)
                )}
            </ul>
        </form>
    );
}