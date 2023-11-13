import React, {useEffect, useState} from 'react'
import axios from "axios"
import classes from "./Projects.module.css"
import Button from "../../ui/Button/Button"
import Checkbox from "../Checkbox/Checkbox"

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [activeProjects, setActiveProjects] = useState([])

    const addActiveProjects = (project) => {
        if (activeProjects.includes(project)) {
            setActiveProjects(activeProjects.filter(item => item !== project))
        } else {
            setActiveProjects([...activeProjects, project])
        }
    }
    console.log(activeProjects)

    const nextPage = () => {
        setPageNumber(pageNumber + 1)
    }

    const prevPage = () => {
        pageNumber === 1 ?
            setPageNumber(1)
            :
            setPageNumber(pageNumber - 1)

    }

    const getProjects = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const data = response.data
        data.length = 8
        setProjects(data)
    }

    useEffect(() => {
        getProjects()
    }, [])


    return (
        <div className={classes.container}>

            <table className={classes.table}>
                <thead>
                <tr>
                    <td className={classes.tableRowTitle}>Project Name</td>
                    <td className={classes.tableRowTitle}>SO Reference</td>
                    <td className={classes.tableRowTitle}>Select</td>
                    <td className={classes.tableRowTitle}>View product</td>
                    <td className={classes.tableRowTitle}>Delete</td>
                </tr>
                </thead>
                <tbody>
                {projects.map(item =>
                    <tr className={classes.tableRow} key={item.id}>
                        <td className={classes.tableItem}><a href="#" style={{color: 'black'}}>{item.name}</a></td>
                        <td className={classes.tableItem}>Test</td>
                        <td className={classes.tableItem} onClick={() => addActiveProjects(item.name)}><Checkbox/></td>
                        <td className={classes.tableItem}>
                            <Button
                                style={{fontSize: '1.0625rem', padding: '0.5rem 0.875rem', borderRadius: '.5rem'}}
                            >Open project</Button>
                        </td>
                        <td className={classes.tableItem}>
                            <a href="#" style={{color: 'black'}}>Delete</a>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <div className={classes.bottomContainer}>
                <div className={classes.pageNavContainer}>
                    <Button
                        style={{fontSize: '1.0625rem', padding: '0.5rem 0.875rem', borderRadius: '.5rem'}}
                        onClick={prevPage}
                    >Previous</Button>
                    <p className={classes.pageNumber}>{pageNumber}</p>
                    <Button
                        style={{fontSize: '1.0625rem', padding: '0.5rem 0.875rem', borderRadius: '.5rem'}}
                        onClick={nextPage}
                    >Next</Button>
                </div>
                <div className={classes.pageNavContainer}>
                    <span className={classes.selectedProjectCount}>Selected Items: {activeProjects.length}</span>
                    <Button
                        style={{fontSize: '1.0625rem', padding: '0.5rem 0.875rem', borderRadius: '.5rem'}}
                    >Download</Button>
                </div>
            </div>
        </div>
    )
}

export default Projects