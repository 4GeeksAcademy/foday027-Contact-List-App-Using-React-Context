import React, { useContext } from 'react';
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router';

export const Card = ({ email, phone, address, name, contactId }) => {
    const navigate = useNavigate();
    const { store, actions} = useContext(Context);



    retun ( <div className='card' style={{ width: '28rem'}}>
    
    <div className='card-body d-flex'>
        <div className='container'>
            <figure>
                <img className='img-fluids' src='https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-1024.png' alt={name} />
                <figcaption>{name}</figcaption>
            </figure>
        </div>

        <div className='conatainer'>
            <p>
                email: {email}
            </p>

            <p>
                phone: {phone}
            </p>

            <p>
                address: {address}
            </p>
            <button className='btn btn-success' onClick={''}>Edit</button>
            <button className='btn btn-danger' onClick={''}>Delete</button>
        </div>
    </div>
 </div>
    )
};


export default Card;