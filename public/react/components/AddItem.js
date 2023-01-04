import React, { useEffect } from "react"

import apiURL from "../api";

export const AddItem = ({
    newItem,
    setNewItem,
    setSelectedPage
}) => {

    async function postItem() {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/JSON'},
                body: JSON.stringify(newItem)
            }
            const response = await fetch(`${apiURL}/items`, requestOptions)
        } catch (err) {
          console.log("Oh no an error! ", err);
        }
    }

    function handleChange(ev) {
        const value=ev.target.value
        setNewItem({
            ...newItem,
            [ev.target.name]: value
        })
    }

    const handleSubmit = async (e) => {
        postItem()
        setNewItem({title: '', description: '', price: 0, category: '', image: ''})
    }

    const handleBackButton = async () => {
        setSelectedPage("Main View")
    }

    return (
            <>
                <div className="form-page-style">
                    <form onSubmit = {handleSubmit}>
                        <label for="title">Item name:</label>
                        <br></br>
                        <input type='text' name='title' value={ newItem.title }
                            onChange={handleChange} className='input-form' />
                        <br></br>
                        <label for="description">Description:</label>
                        <br></br>
                        <input type='text' name='description' value = {newItem.description}
                            onChange={handleChange} className='input-form' />
                        <br></br>
                        <label for="price">Price:</label>
                        <br></br>
                        <input type='number' name='price' value = {newItem.price}
                            onChange={handleChange} className='input-form' />
                        <br></br>
                        <label for="category">Category:</label>
                        <br></br>
                        <input type='text' name='category' value = {newItem.category}
                            onChange={handleChange} className='input-form' />
                        <br></br>
                        <label for="image">Image:</label>
                        <br></br>
                        <input type='text' name='image' value = {newItem.image}
                            onChange={handleChange} className='input-form' />
                        <br></br><br></br>
                        <div className="buttons-div">
                          <button type='submit' className='button-59'>Submit</button>
                          <button onClick={handleBackButton} className='button-59'>Back to Wiki List</button>
                        </div>
                    </form>
                </div>
            </>
          );
}