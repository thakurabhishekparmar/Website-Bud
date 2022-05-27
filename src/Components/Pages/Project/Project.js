import React, { useState, Fragment } from "react";
import Navbar from "../../Navbar/Navbar";
import { nanoid } from 'nanoid';
import "./project.css";
import { jest } from '@jest/globals'
import data from "./moch-data.json"
import { NavigateNextOutlined } from "@material-ui/icons";
import ReadOnlyRow from "./ReadOnlyRow";
import EditTableeRow from "./EditTableeRow";

const Project = () => {

  const [contacts, setContacts] = React.useState(data);
  const [addFormData, setAddFormat] = React.useState({
    fullName: '',
    email: '',
    projectname: '',
    deadline: ''
  })

  const [editFormData, setEditFormData] = useState({
    fullName: '',
    email: '',
    projectname: '',
    deadline: ''
  })

  const [editContactId, setEditContactId] = React.useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    const entries = jest.fn()
    global.FormData = () => ({ entries })
    //setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      email: addFormData.email,
      projectname: addFormData.projectname,
      deadline: addFormData.deadline
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      email: editFormData.email,
      projectname: editFormData.projectname,
      deadline: editFormData.deadline
    }

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null)
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      email: contact.email,
      projectname: contact.projectname,
      deadline: contact.deadline
    }

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  }

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  }
  return <div className="app-container">
    <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Project Name</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Fragment>
              {editContactId === contact.id ? (<EditTableeRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} />) : (<ReadOnlyRow contact={contact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />)}
            </Fragment>
          ))}
        </tbody>
      </table>
    </form>
    <h2>Add a New Project</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input type="text" name="fullName" required="required" placeholder="Enter a name..." onChange={handleAddFormChange} />
      <input type="text" name="email" required="required" placeholder="Enter an email..." onChange={handleAddFormChange} />
      <input type="text" name="projectname" required="required" placeholder="Enter name of project..." onChange={handleAddFormChange} />
      <input type="text" name="deadline" required="required" placeholder="Enter the deadline..." onChange={handleAddFormChange} />
      <button type="submit">Add</button>
    </form>
  </div>
};
export default Project;