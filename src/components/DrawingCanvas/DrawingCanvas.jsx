import React, {useEffect, useRef, useState} from 'react'
import styles from './DrawingCanvas.module.css'
import DrawingCanvasMenu from "../DrawingCanvasMenu/DrawingCanvasMenu"

const DrawingCanvas = ({isActive}) => {
    const canvasRef = useRef(null)
    const ctxRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    const [lineWidth, setLineWidth] = useState(5)
    const [lineColor, setLineColor] = useState("black")
    const [lineOpacity, setLineOpacity] = useState(0.1)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        ctx.lineCap = "round"
        ctx.lineJoin = "round"
        ctx.globalAlpha = lineOpacity
        ctx.strokeStyle = lineColor
        ctx.lineWidth = lineWidth
        ctxRef.current = ctx
    }, [lineColor, lineOpacity, lineWidth])

    const startDrawing = (e) => {
        ctxRef.current.beginPath()
        ctxRef.current.moveTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        )
        setIsDrawing(true)
    }

    const endDrawing = () => {
        ctxRef.current.closePath()
        setIsDrawing(false)
    }

    const draw = (e) => {
        if (!isDrawing) {
            return
        }
        ctxRef.current.lineTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        )

        ctxRef.current.stroke()
    }
    return (
        <div className={styles.drawArea}>
            <div style={{display: isActive ? 'block' : 'none'}}>
                <DrawingCanvasMenu
                    setLineColor={setLineColor}
                    setLineWidth={setLineWidth}
                    setLineOpacity={setLineOpacity}
                />
            </div>

            <canvas
                onMouseDown={isActive ? startDrawing : null}
                onMouseUp={isActive ? endDrawing : null}
                onMouseMove={isActive ? draw : null}
                ref={canvasRef}
                width={`1280px`}
                height={`720px`}
            />
        </div>
    )
}

export default DrawingCanvas