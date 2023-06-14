import  { useEffect, useState } from 'react'

export default function useScrolledToBottom() {
    console.log("render4");
    const [isBottom, setIsBottom] = useState(false)

    useEffect(() => {
        console.log("chushihua");
        window.addEventListener('scroll', function () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
            let scrollHeight = document.documentElement.scrollHeight || window.innerHeight
            console.log(scrollHeight - (scrollTop + clientHeight))
            if (scrollTop + clientHeight >= scrollHeight) {
                console.log('bottom');
                setIsBottom(true)
            }
        })
        return () => {
            window.removeEventListener("scroll", function () {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
                let scrollHeight = document.documentElement.scrollHeight || window.innerHeight
                console.log(scrollHeight - clientHeight)
                if (scrollTop + clientHeight >= scrollHeight) {
                    setIsBottom(true)
                }
            })
        }
    }, [])

    return { isBottom, setIsBottom }
}
