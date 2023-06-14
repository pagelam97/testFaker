import { useEffect, useRef, useState } from 'react'
import { getPersionList } from '../request/Api/getPersionList'
import useScrolledToBottom from './useScrolledToBottom'

export default function useRequest() {
    console.log("render2");
    const { isBottom, setIsBottom } = useScrolledToBottom()
    const [persionList, setPersionList] = useState([])
    const count = useRef(1)

    useEffect(() => {
        if (count.current === 1) {
            console.log("1");
            count.current++
            return
        }
        console.log("2");
        fetchData()
    }, [])

    useEffect(() => {
        console.log("3");
        if (isBottom) {
            fetchData()
            setIsBottom(false)
        }
    }, [isBottom])

    const fetchData = async () => {
        try {
            let res = await getPersionList({
                url: "/list"
            })
            console.log("res--->", res)
            console.log('res.status--->', res.status)
            setPersionList((pre) => {
                return [...pre, ...res.data]
            })
        } catch (error) {
            console.log(error)
        }
    }

    return { persionList, setPersionList }
}