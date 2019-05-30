import React, { Component } from 'react';
// import axios from 'axios';
// import API from "../utils/API";

class AddParts extends Component {
    
    state = {
        //parts
        Valve: 0,
        Seat: 0,
        DRing: 0,
        Packing: 0,
        Plunger: 0
    }



    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.title && this.state.author) {
    //       API.saveBook({
    //         title: this.state.title,
    //         author: this.state.author,
    //         synopsis: this.state.synopsis
    //       })
    //         .then(res => this.loadBooks())
    //         .catch(err => console.log(err));
    //     }
    //   };

    render () {
        return (
            <form>
                <label>
                Name:
                <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default AddParts;
