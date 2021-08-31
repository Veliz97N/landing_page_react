const Jumbotron = () => {
    const parrafo_interno = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident fuga error veritatis ut quas iste, cumque quibusdam quod id impedit asperiores, quos sapiente mollitia nesciunt obcaecati blanditiis eligendi unde hic?";
    const saludo= "A Warm Welcome!"
    const handleClick=()=>{
        alert("Actioon!!");
    }
    return (
        <div className="jumbotron">
            <div className="jumbotron_interno">
            <div className="header">
                <h1>{saludo}</h1>
            </div>
            <div className="parrafo">{parrafo_interno}</div>
            <button onClick={handleClick}>Call to action!</button>              
            </div>
        </div>
    );
}
export default Jumbotron;
