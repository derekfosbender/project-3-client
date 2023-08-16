import axios from "axios";
import React, { Component } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

class AddPhoto extends Component {
    constructor(props) {
        super(props);

    this.state = {
        photo: "",
        location: "",
        time: "",
      };
    }

      handleSubmit = (event) => {
        event.preventDefault();
    
        const uploadData = new FormData();
    
        uploadData.append("photo", this.state.photo)
        uploadData.append("location", this.state.location)
        uploadData.append("time", this.state.time)
        console.log(uploadData);
    
    axios
    .post("http://localhost:5005/photo",uploadData, {
        headers: {"Content-Type": "multipart/form-data"},
        withCredentials: true,
    })
    .then((response) => {
        this.props.getData();

        this.fileInput.value = "";

        this.setState({
         photo: "",
         location: "",
         time: "",

        });
        
    })
    .catch((error) => console.log({error}));
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    handleCheckboxChange = (event) => {
        const { name, checked } = event.target;

        this.setState({ [name]: checked });
    };

    handleImageChange = (event) => {
        const { files } = event.target;

        console.log(files);
        this.setState({ photo: files[0] });
    
    };

    render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>Add Photo</label>
           <input 
           type="file"
           name="photo"
           onChange={(event) => this.handleChange(event)}
           ref={(ref) => (this.fileInput = ref)}
           />

           <label>Add Location</label>
           <input
           type="text"
           name="location"
           onChange={(event) => this.handleChange(event)}
           value={this.state.location}
           />

           <label>Add Time</label>
           <input
           type="text"
           name="time"
           onChange={(event) => this.handleChange(event)}
           value={this.state.time}
           />

           <button type="submit">Create Post</button>
       
       </form>
        </div>

    )

}
}

export default AddPhoto;