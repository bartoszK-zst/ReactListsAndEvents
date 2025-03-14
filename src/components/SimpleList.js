import { useState } from "react";

export default function SimpleList(props){

    const alphabeticalComparator = (a, b) => {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
    }

    const couteralphabeticalComparator = (a, b) => {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        return 0;
    }

    const idComparator = (a, b) => {
        if(a.id < b.id) return -1;
        if(a.id > b.id) return 1;
        return 0;
    }

    const [currentComparator, setCurrentComparator] = useState(idComparator);

    const [names, setNames] = useState(props.names || []);

    const [inputNameValue, setInputNameValue] = useState("");

    const getNewId = () => {
        return Math.max(...names.map((name) => name.id)) + 1;
    }

    const handleInputNameSubmit = (event) => {
        event.preventDefault();
        if (inputNameValue.trim() === "") {
            return;
        }

        setNames((prevNames) => [
            ...prevNames,
            { id: getNewId(), name: inputNameValue || "brak imienia" },
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
        <form>
            <ul>
                <li>
                Sortuj według
                </li>
                <li>
                    <label onClick={setCurrentComparator(idComparator)}>
                        <input type="radio" name="sortOrder" value="byId"/>
                        id
                    </label>
                </li>
                <li>
                    <label onClick={setCurrentComparator(alphabeticalComparator)}>
                    <input type="radio" name="sortOrder" value="byNameAlphabetically"/>
                        imienia A-Z
                    </label>
                </li>
                <li>
                    <label onClick={setCurrentComparator(couteralphabeticalComparator)}>
                    <input type="radio" name="sortOrder" value="byNameCounteralphabetically"/>
                        imienia Z-A
                    </label>
                </li>
            </ul>
        </form>
        <form onSubmit={handleInputNameSubmit}>
            <input
                type="text"
                value={inputNameValue}
                onChange={handleInputNameChange}
            />
            <input type="submit" value="Dodaj"/>
        </form>
        <ul>
            {names.slice().sort((a, b) => currentComparator(a, b)).map((item) => (
                <li key={item.id}>
                    {item.name}
                    <button value={item.id} onClick={() => handleDelete(item.id)}>Usuń</button>
                </li>
            ))}
        </ul>
        </>
    );
}