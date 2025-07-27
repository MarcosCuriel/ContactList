export const createAgenda = async () => {
  const response = await fetch(
    "https://playground.4geeks.com/contact/agendas/marcos",
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    console.error("Error al crear la agenda");
  }
};

export const getAgendaContact = async (dispatch) => {
  const response = await fetch(
    "https://playground.4geeks.com/contact/agendas/marcos/contacts"
  );

  if (!response.ok) {
    console.error("Agenda no econtrada, creando agenda...");
    await createAgenda();
    return;
  }

  const data = await response.json();
  dispatch({ type: "get_contacts", payload: data.contacts });
};

export const postContact = async (newContact, dispatch) => {
  const response = await fetch(
    "https://playground.4geeks.com/contact/agendas/marcos/contacts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    }
  );

  if (!response.ok) {
    console.error("Error al crear el contacto");
    return;
  }

  const data = await response.json();
  dispatch({ type: "post_contacts", payload: data });
};

export const changeContact = async (id, updatedContact, dispatch) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/marcos/contacts/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContact),
    }
  );

  if (!response.ok) {
    console.error("Error al actualizar el contacto");
    return;
  }

  const data = await response.json();
  dispatch({ type: "put_contact", payload: data });
};

export const deleteContact = async (id, dispatch) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/marcos/contacts/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    console.error("Error al eliminar el contacto");
    return;
  }

  dispatch({ type: "delete_contact", payload: id });
};
