import { useState } from "react";

export default function SimpleList(props){
    const [names, setNames] = useState(props.names);

    const [inputNameValue, setInputNameValue] = useState("");

    const getNewId = () => {
        return Math.max(...names.map((name) => name.id)) + 1;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setNames((prevNames) => [
            ...prevNames,
            { id: getNewId(), name: inputNameValue },
        ]);

        setInputNameValue("");
    }

    const handleInputNameChange = (event) => {
        setInputNameValue(event.target.value);
    }

    const handleDelete = (id) => {
        const newNames = names.filter((item) => item.id !== id);
        setNames(newNames);
    }

    return (
        <>
        <ul>
            {names.map((item) => (
                <li key={item.id}>
                    {item.name}
                    <button value={item.id} onClick={() => handleDelete(item.id)}>Usuń</button>
                </li>
            ))}
        </ul>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputNameValue}
                onChange={handleInputNameChange}
            />
            <input type="submit" value="Dodaj"/>
        </form>
        </>
    );
}