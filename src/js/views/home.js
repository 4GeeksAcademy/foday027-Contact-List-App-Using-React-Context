import React, { useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { Context } from "../store/appContext.js"; 



export const Home = () => {
	const {  store, actions } = useContext (Context);
	return (
		<div className="text-center mt-5">
			<NewUser/>
			<Card/>


			{store.initiated ? <main>

				{store.contacts?.map ((el, i) => <card key = {i} email = {el.email} phone ={el.phone} address ={el.address} name = {el.name} />)}

			</main> : ''}	


		</div>
		
	)
};

render.Dom(<Card/>, Home);