import React from 'react'

const EditTableeRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
  return (
    <tr>
      <td>
        <input type="text" required="required" placeholder="Enter a name..." name="fullName" value={editFormData.fullName} onChange={handleEditFormChange}></input>
      </td>
      <td>
        <input type="text" required="required" placeholder="Enter an email..." name="email" value={editFormData.email} onChange={handleEditFormChange}></input>
      </td>
      <td>
        <input type="text" required="required" placeholder="Enter name of project..." name="projectname" value={editFormData.projectname} onChange={handleEditFormChange}></input>
      </td>
      <td>
        <input type="text" required="required" placeholder="Enter the deadline..." name="deadline" value={editFormData.deadline} onChange={handleEditFormChange}></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  )
}

export default EditTableeRow;