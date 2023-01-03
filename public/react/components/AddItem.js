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
                <form onSubmit = {handleSubmit}>
                    <input type='text' name='title' value={ newItem.title }
                        onChange={handleChange} />
                    <input type='text' name='description' value = {newItem.description}
                        onChange={handleChange} />
                    <input type='number' name='price' value = {newItem.price}
                        onChange={handleChange} />
                    <input type='text' name='category' value = {newItem.category}
                        onChange={handleChange} />
                    <input type='text' name='image' value = {newItem.image}
                        onChange={handleChange} />
                    <button type='submit'>Submit</button>
                    <button onClick={handleBackButton}>Back to Wiki List</button>
                </form>
            </>
          );
}