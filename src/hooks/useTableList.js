import { useEffect, useState } from 'react'
import getTableList from '../request/Api/getTableList'

export default function useTableList(page) {

    console.log(page);
    const [dataList, setDataList] = useState([])
    useEffect(() => {
        fetchData(page)
    }, [page])

    const fetchData = async (page) => {
        try {
            let res = await getTableList({
                url: page,
                method: 'get'
            })
            console.log(res.data);
            setDataList(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    return { dataList }
}
