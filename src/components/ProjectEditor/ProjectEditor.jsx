import React from 'react'
import classes from './ProjectEditor.module.css'
import Input from "../../ui/Input/Input"
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon"
import RightArrowIcon from "../../assets/svg/RightArrowIcon"
import Button from "../../ui/Button/Button"
import ImportIcon from "../../assets/svg/ImportIcon"
import useInput from "../../hooks/useInput"

const ProjectEditor = () => {

    const projNameInput = useInput('', 'test')
    const projRefInput = useInput('', 'test')
    const descriptionTxtArea = useInput('', 'test')
    console.log(descriptionTxtArea.value)

    return (
        <div className={classes.container}>
            <div>
                <p className={classes.inputLabel}>Project Name</p>
                <Input
                    value={projNameInput.value}
                    placeholder={projNameInput.placeholder}
                    onChange={projNameInput.onChange}
                    style={{width: '27.875rem', fontSize: '1.25rem', height: '1rem', padding: '.69rem .31rem'}}
                />
                <p className={classes.inputLabel}>SO References</p>
                <Input
                    value={projRefInput.value}
                    placeholder={projRefInput.placeholder}
                    onChange={projRefInput.onChange}
                    style={{width: '27.875rem', fontSize: '1.25rem', height: '1rem', padding: '.69rem .31rem'}}
                />
                <p className={classes.inputLabel}>Descriptor</p>
                <textarea
                    value={descriptionTxtArea.value}
                    placeholder={descriptionTxtArea.placeholder}
                    onChange={descriptionTxtArea.onChange}
                    className={classes.textArea}
                />
            </div>
            <div className={classes.imagesContainer}>
                <div className={classes.img}>

                </div>
                <div className={classes.imgPagination}>
                    <LeftArrowIcon />
                    <p className={classes.pageNumber}>1</p>
                    <RightArrowIcon />
                </div>
            </div>
            <div>
                <div className={classes.imgInputContainer}>
                    <p className={classes.imgInputLabel}>Front image</p>
                    <Button
                        style={{padding: '.5rem .62rem', justifyContent: 'space-between', width: '6.68rem'}}
                    >
                        Import
                        <ImportIcon width={'1rem'} height={'1rem'}/>
                    </Button>
                </div>
                <div className={classes.imgInputContainer}>
                    <p className={classes.imgInputLabel}>Back image</p>
                    <Button
                        style={{padding: '.5rem .62rem', justifyContent: 'space-between', width: '6.68rem'}}
                    >
                        Import
                        <ImportIcon width={'1rem'} height={'1rem'}/>
                    </Button>
                </div>
                <div className={classes.imgInputContainer}>
                    <p className={classes.imgInputLabel}>Sleeve image</p>
                    <Button
                        style={{padding: '.5rem .62rem', justifyContent: 'space-between', width: '6.68rem'}}
                    >
                        Import
                        <ImportIcon width={'1rem'} height={'1rem'}/>
                    </Button>
                </div>
                <div>
                    <Button
                        style={{padding: '0.625rem 5.3125rem', marginTop: '9rem'}}
                    >
                        Save
                    </Button>
                </div>

            </div>

        </div>
    )
}

export default ProjectEditor