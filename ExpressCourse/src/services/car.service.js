import axios from "axios";
export const CarService = {
    async getAll () {
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
            return response.data
          }
    }