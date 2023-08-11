import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   name: "",
   email: "",
   phone: "",
   internship: "",
   question:""
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:3005/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
    name: form.name,
    email: form.email,
    phone: form.phone,
    internship: form.internship,
    question:form.question
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:3005/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/Admin");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Email: </label>
         <input
           type="text"
           className="form-control"
           id="email"
           value={form.email}
           onChange={(e) => updateForm({ email: e.target.value })}
         />
         </div>
         <div className="form-group">
         <label htmlFor="position">Phone </label>
         <input
           type="numeric"
           className="form-control"
           id="phone"
           value={form.phone}
           onChange={(e) => updateForm({ phone: e.target.value })}
         />
         </div>
         <div className="form-group">
         <label htmlFor="position">internship </label>
         <input
           type="text"
           className="form-control"
           id="internship"
           value={form.internship}
           onChange={(e) => updateForm({ internship: e.target.value })}
         />
         </div>
         <div className="form-group">
         <label htmlFor="position">Questions </label>
         <input
           type="text"
           className="form-control"
           id="question"
           value={form.question}
           onChange={(e) => updateForm({ question: e.target.value })}
         />
         
         </div>
         <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div>

     </form>
   </div>
 );
}