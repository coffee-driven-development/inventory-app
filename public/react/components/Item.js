import React, { useEffect } from "react"
import apiURL from "../api"

export const Page = () => {
    const [singlePageView, setSinglePageView] = useState(false)

    const fetchItem = async () => {
        try {
            // single article page
            const res = await fetch(`${apiURL}/item/`)
            const data = await res.json()
            console.log(data)
            // TODO: handle state
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchItem()
    }, [])

    const showSinglePageView = () => {
        fetchItem()
        setSinglePageView(!singlePageView)
    }

    const handleBackButton = async () => {
        setSinglePageView(!singlePageView)
    }

    return (
        <>
            {singlePageView ? (
                <>
                    <h3>{props.item.title}</h3>
                    <img src={props.image} alt={props.item.name} />
                    <p>{props.item.description}</p>
                    <p>{props.item.price}</p>
                    <p>{props.item.category}</p>
                    <button onClick={handleBackButton}>Back to Wiki List</button>
                </>

            ) : (<h3 onClick={showSinglePageView}>Item</h3>)
            }
        </>
    )
}