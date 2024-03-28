import { useCallback, useState, useEffect} from "react";

export default function Background({ children }) {
    const [mouseXY, setMouseXY] = useState(0);

    const updateMousePosition = useCallback((event) => {
        setMouseXY({ x: event.clientX, y: event.clientY })
    }, [setMouseXY])

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        }
    }, [updateMousePosition])


    return (
        <div
            style={{ backgroundPosition: `${-mouseXY.x / 100}px ${(-mouseXY.y / 100)}px` }}
            className="contentContainer project"
        >
            {children}
        </div>
    )
}