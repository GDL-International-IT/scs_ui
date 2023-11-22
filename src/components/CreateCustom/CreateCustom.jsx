import React, {useRef, useState} from 'react'
import styles from './CreateCustom.module.css'
import Button from "../../ui/Button/Button"
import ImportIcon from "../../assets/svg/ImportIcon"
import Checkbox from "../Checkbox/Checkbox"
import SavedIcon from "../../assets/svg/SavedIcon"
import NewProjectIcon from "../../assets/svg/NewProjectIcon"
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon"
import RightArrowIcon from "../../assets/svg/RightArrowIcon"
import RotateIcon from "../../assets/svg/RotateIcon"
import MoveIcon from "../../assets/svg/MoveIcon"
import ResizeIcon from "../../assets/svg/ResizeIcon"
import LineIcon from "../../assets/svg/LineIcon"
import TextIcon from "../../assets/svg/TextIcon"
import ColorIcon from "../../assets/svg/ColorIcon"
import PdfIcon from "../../assets/svg/PdfIcon"
import logo from '../../assets/svg/LogoIcon.svg'
import MovableImage from "../MovableImage/MovableImage"
import MovableLabel from "../MovableLabel/MovableLabel"
import DrawingCanvas from "../DrawingCanvas/DrawingCanvas"

const CreateCustom = () => {

    const [layerStyles, setLayerStyles] = useState([styles.layer])
    const canvasRef = useRef(null)
    const [images, setImages] = useState([])
    const [labels, setLabels] = useState([0])
    const [isCanvasActive, setIsCanvasActive] = useState(false)

    const changeActiveLayer = () => {
        if (layerStyles.includes(styles.activeLayer)) {
            setLayerStyles([layerStyles[0]])
            return
        }
        setLayerStyles([...layerStyles, styles.activeLayer])
    }


    return (
        <div className={styles.container}>
            <div className={styles.tools}>
                <div onClick={() => setImages([...images, logo])}>
                    <Button
                        style={{padding: '.5rem .62rem', justifyContent: 'space-between', width: '9.56rem'}}
                    >
                        Upload logo
                        <ImportIcon width={'1rem'} height={'1rem'}/>
                    </Button>
                </div>

                <div className={styles.projectTools}>
                    <SavedIcon height={'1.5rem'} width={'1.5rem'}/>
                    <NewProjectIcon height={'1.5rem'} width={'1.5rem'}/>
                </div>
                <div className={styles.paintTools}>
                    <LeftArrowIcon height={'1.5rem'} width={'1.5rem'}/>
                    <RightArrowIcon height={'1.5rem'} width={'1.5rem'}/>
                    <RotateIcon height={'1.5rem'} width={'1.5rem'}/>
                    <MoveIcon height={'1.5rem'} width={'1.5rem'}/>
                    <ResizeIcon height={'1.5rem'} width={'1.5rem'}/>
                    <div onClick={() => setIsCanvasActive(!isCanvasActive)}>
                        <LineIcon height={'1.5rem'} width={'1.5rem'}/>
                    </div>
                    <div onClick={() => setLabels([...labels, labels.length])}>
                        <TextIcon height={'1.5rem'} width={'1.5rem'}/>
                    </div>

                    <ColorIcon height={'1.5rem'} width={'1.5rem'}/>
                    <PdfIcon height={'1.5rem'} width={'1.5rem'}/>
                </div>
            </div>
            <div
                className={styles.canvas}
                ref={canvasRef}
            >

                {
                    images.map((img, index) =>
                        <MovableImage className={styles.img} src={img} canvasRef={canvasRef} zIndex={index} key={index}/>
                    )
                }
                {
                    labels.map((label, index) =>
                        <MovableLabel className={styles.label} canvasRef={canvasRef} id={label} key={index}/>
                    )
                }
                <div className={styles.drawArea}>
                    <DrawingCanvas isActive={isCanvasActive}/>
                </div>
            </div>

            <div className={styles.layerContainer}>
                <div className={layerStyles.join(' ')}>
                    <div className={styles.checkbox} onClick={changeActiveLayer}>
                        <Checkbox/>
                    </div>
                </div>
                <div className={styles.layer}>
                    <div className={styles.checkbox}>
                        <Checkbox/>
                    </div>
                </div>
                <div className={styles.layer}>
                    <div className={styles.checkbox}>
                        <Checkbox/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCustom