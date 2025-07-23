export const createAgenda = async () => {
	await fetch('https://playground.4geeks.com/contact/agendas/marcos', {
		method: "POST"
	})
}

export const getAgendaContact = async () => {
	const response = await fetch('https://playground.4geeks.com/contact/agendas/marcos/contacts');
	const data = await response.json();
	console.log(data);
}

