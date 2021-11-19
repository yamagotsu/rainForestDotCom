import axios from 'axios';

const url = 'http://localhost:4000/';


export const fetchData = async (category) => {
    let dataUrl = `${url}`

    if (category) {
        dataUrl = `${url}${category.toLowerCase()}`;
    }

    try {
        const { data } = await axios.get(dataUrl)

        return data
    } catch (error) {
        console.error(`Woops fetch: ${error}`)
    }
}