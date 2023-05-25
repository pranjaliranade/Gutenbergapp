import React, {useState} from "react";

const App = () => {

    const [isLoading, setIsLoading] = useState(false);

    const handleClick2 = async () => {
        setIsLoading(true);

        try{
            
            const response = await fetch("http://skunkworks.ignitesol.com:8000/books/?topic=drama", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        }
        catch{};
    }
    const handleClick3 = async () => {
        setIsLoading(true);

        try{
            
            const response = await fetch("http://skunkworks.ignitesol.com:8000/books/?topic=humour", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        }
        catch{};
    }
    const handleClick4 = async () => {
        setIsLoading(true);

        try{
            
            const response = await fetch("http://skunkworks.ignitesol.com:8000/books/?topic=politics", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        }
        catch{};
    }
    const handleClick5 = async () => {
        setIsLoading(true);

        try{
            
            const response = await fetch("http://skunkworks.ignitesol.com:8000/books/?topic=philosophy", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        }
        catch{};
    }
    const handleClick6 = async () => {
        setIsLoading(true);

        try{
            
            const response = await fetch("http://skunkworks.ignitesol.com:8000/books/?topic=history", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        }
        catch{};
    }
    const handleClick7 = async () => {
        setIsLoading(true);

        try{
            
            const response = await fetch("http://skunkworks.ignitesol.com:8000/books/?topic=adventure", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        }
        catch{};
    }
    const func1 = async() => {
        handleClick1(),
        window.location.href = 'searchPage.html'
    }
    const func2 = async() => {
        handleClick2(),
        window.location.href = 'searchPage.html'
    }
    const func3 = async() => {
        handleClick3(),
        window.location.href = 'searchPage.html'
    }
    const func4 = async() => {
        handleClick4(),
        window.location.href = 'searchPage.html'
    }
    const func5 = async() => {
        handleClick5(),
        window.location.href = 'searchPage.html'
    }
    const func6 = async() => {
        handleClick6(),
        window.location.href = 'searchPage.html'
    }
    const func7 = async() => {
        handleClick7(),
        window.location.href = 'searchPage.html'
    }
}
