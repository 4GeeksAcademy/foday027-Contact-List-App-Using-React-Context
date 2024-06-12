const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			createAgenda: async (newContact) => {
				try{
					const opt = {
						method: 'POST',
						headers: {
							'content-Type': 'applications/json'
						},
						body:JSON.stringify(newContact)
					}
					const resp = await fetch(`${getStore().baseUrl}${user}`, opt);
					const data = await resp.json();
					console.log('createAgenda response ---->', data)
					setScore({user: user, initiated: true});
					getActions().getContacts();

					return true;
				} catch(error) {
					console.log('error creating agenda ---->', error);
					return false;
				}
			}
			},
			createAgenda: async (user) => {
				try {
					const opt = {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
					}
				}
			}










			getContacts: async () => {
				try {
					const resp = await fetch(`${getStore().baseUrl}${getScore().user}/contacts`);
					const data = await resp.json();
					setScore({ contacts: data.contacts });
				} catch (error) {
					console.log('erroe getting contacts ---->');
				}
			},




			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
