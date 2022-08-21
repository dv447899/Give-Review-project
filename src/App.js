import React, { useState } from "react";
import "./App.css";
import data from "./mock-data.json";

const App = () => {
  const [feedback, setFeedback] = useState(data);
  const [addFormData, setAddFormData] = useState({
    title: "",
    rating: "",
    description: "",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      title: addFormData.title,
      rating: addFormData.rating,
      description: addFormData.description,
    };
    const newReviews = [...feedback, newReview];
    setFeedback(newReviews);
  };
  const handleDeleteClick = (contactId) => {
    const newFeedback = [...feedback];
    const index = feedback.findIndex((feedback) => feedback.id === contactId);
    newFeedback.splice(index, 1);
    setFeedback(newFeedback);
  };
  return (
    <div className="app-container">
      <h2>Give Review</h2>

      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="title...."
          required="required"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          className="form-control"
          name="rating"
          placeholder="Rating...."
          required="required"
          onChange={handleAddFormChange}
        />
        <textarea
          type="text"
          className="form-control"
          name="description"
          placeholder="description....."
          required="required"
          onChange={handleAddFormChange}
        />
        <button type="submit" className="btn btn-danger">
          Add
        </button>
      </form>

      <h2>Display Review</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {feedback.map((value, index) => (
            <tr key={index}>
              <td>{value.title}</td>
              <td>{value.rating}</td>
              <td>{value.description}</td>
              <td>
                <button
                  onClick={handleDeleteClick}
                  className="btn btn-secondary"
                  type="button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
