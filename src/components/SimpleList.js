import { useState } from "react";

export default function SimpleList(props){
    const [names, setNames] = useState(props.names);

    return (
        <ul>
            {names.map((item) => (
                <li key={item.id}>
                    {item.name}
                </li>
            ))}
        </ul>
    );
}