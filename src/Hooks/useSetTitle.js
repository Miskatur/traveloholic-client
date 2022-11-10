import { useEffect } from "react"

const useSetTitle = title => {
    useEffect(() => {
        document.title = `${title} - Traveloholic`;
    }, [title])
}

export default useSetTitle;