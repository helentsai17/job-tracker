import React  from 'react';

function CompanyCard(props) {
    return (
       
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{props.companies.CompanyName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Title</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p></p>
                {/* <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a> */}
            </div>
        </div>
        
        
    )

}
export default CompanyCard;