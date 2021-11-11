import axios from 'axios';

const url = 'http://localhost:4000';


export const fetchData = async () => {
    const menData = `${url}/men`;

    try {
        const { data } = await axios.get(menData)

        return data
    } catch (error) {
        console.error(`Woops fetch: ${error}`)
    }
}