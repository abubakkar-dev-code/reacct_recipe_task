import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await axios.get(url)
                console.log(response)
                if (response.data) {
                    setData(response.data)
                }

            } catch (error) {
                setErrors(error?.message)
                console.log(error);

            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
    return { data, loading, errors };
}

export default useFetch