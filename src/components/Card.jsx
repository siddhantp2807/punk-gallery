
const Card = (props) => {

    const convertDate = (date) => {
        
        const dateParts = date.split('/');
        var formattedDate = null;
        if (dateParts.length > 1) {
            const parsedDate = new Date(`${dateParts[1]}/${dateParts[0]}/01`);
            formattedDate = parsedDate.toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
        } else {
            formattedDate = dateParts[0];
        }
        
        return formattedDate;
    }
    return (
        <div className="card">
            <div className="imgholder">
                <img src={props.data.image_url} alt={props.data.name}/>
            </div>
            <div className="details">
                <h3 className="card-name">{props.data.name}</h3>
                <p className="detail">First brewed: {convertDate(props.data.first_brewed)}</p>
                <p className="detail-light">{props.data.volume.value + " " +props.data.volume.unit}</p>
                <p className="contributor">By {props.data.contributed_by}</p>
            </div>
        </div>
    )
}

export default Card;