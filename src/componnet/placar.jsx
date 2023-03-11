

function placar(props) {
    return (
        <div className="placar">
            <div className="numeros">
                <h1>{ props.getHome() }</h1>
                <h2 onClick={() => props.setBlank()}>x</h2>
                <h1>{ props.getGuest() }</h1>
            </div>
            <div className="times">
                <h1>HOME</h1>
                <h1>GUEST</h1> 
            </div>
        </div>
    )
}

export default placar;