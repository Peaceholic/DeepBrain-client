import Head from "next/head"
import Link from "next/link"
import tableStyles from "../../styles/table.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

export default function BoardList() {
    const columns = [
        "companyName",
        "sortCode",
        "service",
        "majorProduct",
        "startDate",
        "ceoName",
        "webpage",
        "region"
    ]
    const [data, setData] = useState([]);
    const [loginUser, setLoginUser] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:5000/company/')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                alert(err)
            })
        setLoginUser(sessionStorage.getItem('loginUser'))
    }, [])

    const onAddClicked = (e) => {
        e.preventDefault();
        window.location.href = '/board/join'
    }

    return (
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={7}>
                        <h2>
                            코스닥 상장회사
                        </h2>
                    </th>
                </tr>
                <tr>
                    <th colSpan={7}>
                        {loginUser !== null ? (
                            <div style={{ float: "right" }}>
                                <button children="Add Company info" onClick={onAddClicked} />
                            </div>
                        ) : (
                            <></>
                        )}
                    </th>
                </tr>
                <tr>
                    {columns.map((column) => (<th key={column}>{column}</th>))}
                </tr>
            </thead>
            <tbody>
                {
                    data.length == 0
                        ? (
                            <tr>
                                No Data
                            </tr>
                        )
                        : (data.map((company) => (
                            <tr key={company._id}>
                                <td>{company.companyName}</td>
                                <td>{company.sortCode}</td>
                                <td>{company.service}</td>
                                <td>{company.majorProduct}</td>
                                <td>{company.startDate}</td>
                                <td>{company.ceoName}</td>
                                <td>{company.webpage}</td>
                                <td>{company.region}</td>
                                <td>
                                    {loginUser !== null ? (
                                        <><Link href={`/board/${company._id}/`}>Edit</Link></>
                                    ) : (
                                        <>X</>
                                    )}

                                </td>
                            </tr>
                        )))
                }
            </tbody>
        </table>
    )
}