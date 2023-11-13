import React, {useRef, useState} from 'react'
import classes from './CreateCustom.module.css'
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
import spongeBob from '../../sponge-bob-gy0.png'
import patrick from '../../unnamed.jpg'
import MovableImage from "../MovableImage/MovableImage"
import useInput from "../../hooks/useInput"
import MovableLabel from "../MovableLabel/MovableLabel"

const CreateCustom = () => {

    const [layerStyles, setLayerStyles] = useState([classes.layer])
    const canvasRef = useRef(null)
    const [images, setImages] = useState([])
    const [labels, setLabels] = useState([0])

    const changeActiveLayer = () => {
        if (layerStyles.includes(classes.activeLayer)) {
            setLayerStyles([layerStyles[0]])
            return
        }
        setLayerStyles([...layerStyles, classes.activeLayer])
    }


    return (
        <div className={classes.container}>
            <div className={classes.tools}>
                <div onClick={() => setImages([...images, spongeBob])}>
                    <Button
                        style={{padding: '.5rem .62rem', justifyContent: 'space-between', width: '9.56rem'}}
                    >
                        Upload logo
                        <ImportIcon width={'1rem'} height={'1rem'}/>
                    </Button>
                </div>

                <div className={classes.projectTools}>
                    <SavedIcon height={'1.5rem'} width={'1.5rem'}/>
                    <NewProjectIcon height={'1.5rem'} width={'1.5rem'}/>
                </div>
                <div className={classes.paintTools}>
                    <LeftArrowIcon height={'1.5rem'} width={'1.5rem'}/>
                    <RightArrowIcon height={'1.5rem'} width={'1.5rem'}/>
                    <RotateIcon height={'1.5rem'} width={'1.5rem'}/>
                    <MoveIcon height={'1.5rem'} width={'1.5rem'}/>
                    <ResizeIcon height={'1.5rem'} width={'1.5rem'}/>
                    <LineIcon height={'1.5rem'} width={'1.5rem'}/>
                    <div onClick={() => setLabels([...labels, labels.length])}>
                        <TextIcon height={'1.5rem'} width={'1.5rem'}/>
                    </div>

                    <ColorIcon height={'1.5rem'} width={'1.5rem'}/>
                    <PdfIcon height={'1.5rem'} width={'1.5rem'}/>
                </div>
            </div>
            <div
                className={classes.canvas}
                ref={canvasRef}
            >

                {
                    images.map((img, index) =>
                        <MovableImage className={classes.img} src={img} canvasRef={canvasRef} zIndex={index}/>
                    )
                }
                {
                    labels.map(label =>
                        <MovableLabel className={classes.label} canvasRef={canvasRef} id={label}/>
                    )
                }
            </div>

            <div className={classes.layerContainer}>
                <div className={layerStyles.join(' ')}>
                    <div className={classes.checkbox} onClick={changeActiveLayer}>
                        <Checkbox/>
                    </div>
                </div>
                <div className={classes.layer}>
                    <div className={classes.checkbox}>
                        <Checkbox/>
                    </div>
                </div>
                <div className={classes.layer}>
                    <div className={classes.checkbox}>
                        <Checkbox/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCustom