import React, {useState} from "react";

const App = () => {

    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        setIsLoading(true);

        try{
            
            const response = await fetch("http://skunkworks.ignitesol.com:8000/books/?topic=fiction", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        }
        catch{};
    }
}