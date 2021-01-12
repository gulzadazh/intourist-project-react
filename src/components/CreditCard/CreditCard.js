import React, { useState } from 'react';
import '../CreditCard/CreditCard.css';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Link } from 'react-router-dom';

const CreditCardA = () => {

    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [focus, setFocus] = useState("");

    return (
        <div className="App">
            <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
            />
            <div className="form-div">
            <form style={{}}>
                <input type="tel" name="number"
                    placeholder="Card Number" value={number}
                    onChange={e => setNumber(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                    
                />
                <input type="text" name="name"
                    placeholder="Name" value={name}
                    onChange={e => setName(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <input type="text" name="expiry"
                    placeholder="MM/YY Expiry" value={expiry}
                    onChange={e => setExpiry(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <input type="tel" name="cvc"
                    placeholder="CVC" value={cvc}
                    onChange={e => setCvc(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
            </form></div>
            <Link to="/">
            <div style={{display: "flex", justifyContent: "center", textDecoration: "none"}}>
            <button className='btn btn-danger'>Оплатить</button>
            </div>
            </Link>
        </div>
    );
};

export default CreditCardA;