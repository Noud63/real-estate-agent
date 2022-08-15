import axios from 'axios'
import { getRealEstates, gotRealEstates, noRealEstates } from '../features/estateSlice'

const ApiService = () => async (dispatch)=> {
    
            try {
                dispatch(getRealEstates())
                const response = await axios.get('castles')
                const data = response.data
                dispatch(gotRealEstates(data))
            } catch (error) {
                console.error(error.response.data);
                dispatch(noRealEstates({message: "No data found!"}))
            }
}

export default ApiService;
