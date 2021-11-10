import axios from 'axios';

const url = 'https://localhost:4000';


export const fetchData = async () => {
    const menData = `${url}/men`;

    try {
        const { data } = await axios.get(menData)

        console.log(data)
    } catch (error) {
        console.error(`Woops fetch: ${error}`)
    }
}