import React, {useEffect, useState} from 'react'
import classes from './Products.module.css'
import Button from "../../ui/Button/Button"
import axios from "axios"

const Products = () => {

    const [products, setProducts] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const [totalPagesCount, setTotalPagesCount] = useState(null)


    const nextPage = () => {
        pageNumber === totalPagesCount ?
            setPageNumber(pageNumber)
            :
            setPageNumber(pageNumber + 1)
    }

    const prevPage = () => {
        pageNumber === 1 ?
            setPageNumber(1)
            :
            setPageNumber(pageNumber - 1)

    }

    const getProducts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
            params: {
                _limit: 5,
                _page: pageNumber
            },

        })
        setTotalCount(+response.headers['x-total-count'])
        const data = response.data
        const totalPagesCount = Math.ceil(totalCount / 5)
        setTotalPagesCount(totalPagesCount)

        setProducts(data)
    }

    useEffect(() => {
        getProducts()
    }, [pageNumber])






    return (
        <div className={classes.container}>
            <Button

                style={{fontSize: '1.0625rem', padding: '0.5rem 0.875rem', borderRadius: '.5rem', width: '5.8125rem'}}
            >
                Update
            </Button>
            <table className={classes.table}>
                <thead>
                <tr>
                    <td className={classes.tableRowTitle}>Product Name</td>
                    <td className={classes.tableRowTitle}>Product Image</td>
                    <td className={classes.tableRowTitle}>Category</td>
                    <td className={classes.tableRowTitle}>Subcategory</td>
                    <td className={classes.tableRowTitle}>Create custom</td>
                </tr>
                </thead>
                <tbody>
                {products.map(item =>
                    <tr className={classes.tableRow} key={item.id}>
                        <td className={classes.tableItem}>Test</td>
                        <td className={classes.tableItem}>
                            <div className={classes.productImg}></div>
                        </td>
                        <td className={classes.tableItem}>{item.username}</td>
                        <td className={classes.tableItem}>{item.address.city}</td>
                        <td className={classes.tableItem}>
                            <Button
                                style={{fontSize: '1.0625rem', padding: '0.5rem 0.875rem', borderRadius: '.5rem'}}
                            >Create custom</Button>
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
                <span className={classes.amountLabel}>Amount of goods 5</span>
            </div>
        </div>
    )
}

export default Products