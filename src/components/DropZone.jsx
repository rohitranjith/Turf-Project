import { useRef, useEffect } from 'react'
import { alertMsg } from '../utils/basicUtils'

const DropZone = ({ children, getDropped = () => { }, formats = [".jpg", ".jpeg", ".png"], disabled = false, multiple = true }) => {
    const drop = useRef(null)

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if (disabled) {
            return ""
        }
        
        const files = [...e.dataTransfer.files]
        if (files.some((file) => !formats.some((format) => file.name.toLowerCase().endsWith(format.toLowerCase())))) {
            alertMsg(`Only Supports: ${formats.join(', ')}`, "error")
            return
        }
        getDropped({ target: { files: files } })
    }

    useEffect(() => {
        if (drop.current) {
            drop.current.addEventListener('dragover', handleDragOver)
            drop.current.addEventListener('drop', handleDrop)
        }
        return () => {
            if (drop.current) {
                drop.current.removeEventListener('dragover', handleDragOver)
                drop.current.removeEventListener('drop', handleDrop)
            }
        }
    }, [])

    const handleDragOver = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    return (
        <div ref={drop}>
            {children}
        </div>
    )
}

export default DropZone