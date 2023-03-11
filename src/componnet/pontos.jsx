function pontos(props) {
    return (
        <div className="pontos">
            <div className="button" onClick={() => props.attHome()} ><p>:D</p></div>
            <div className="button"onClick={() => props.attGuest()} ><p>:(</p></div>
        </div>
    );
};

export default pontos;