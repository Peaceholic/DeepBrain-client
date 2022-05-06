import { useEffect, useState } from "react"
import axios from "axios"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function BoardList() {

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
        window.location.href = '/board/companyAdd'
    }

    return (
        <TableContainer component={Paper}>

            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <h2>
                                코스닥 상장회사
                            </h2>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                            {loginUser !== null ? (
                                <Button children="종목등록" onClick={onAddClicked} />
                            ) : (
                                <></>
                            )}
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell align="center"><h4>종목코드</h4></TableCell>
                        <TableCell align="center"><h4>회사명</h4></TableCell>
                        <TableCell align="center"><h4>서비스유형</h4></TableCell>
                        <TableCell align="center"><h4>주요품목</h4></TableCell>
                        <TableCell align="center"><h4>상장일</h4></TableCell>
                        <TableCell align="center"><h4>대표자</h4></TableCell>
                        <TableCell align="center"><h4>홈페이지</h4></TableCell>
                        <TableCell align="center"><h4>지역</h4></TableCell>
                        <TableCell align="center"><h4></h4></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.length == 0
                            ? (
                                <TableRow>
                                    No Data
                                </TableRow>
                            )
                            : (data.map((company) => (
                                <TableRow
                                    key={company._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{company.sortCode}</TableCell>
                                    <TableCell align="left">{company.companyName}</TableCell>
                                    <TableCell align="left">{company.service}</TableCell>
                                    <TableCell align="left">{company.majorProduct}</TableCell>
                                    <TableCell align="left">{company.startDate}</TableCell>
                                    <TableCell align="left">{company.ceoName}</TableCell>
                                    <TableCell align="left">{company.webpage}</TableCell>
                                    <TableCell align="left">{company.region}</TableCell>
                                    {loginUser !== null ? (
                                        <TableCell>
                                            <Button href={`/board/${company._id}/`}>수정</Button>
                                        </TableCell>
                                    ) : (
                                        X
                                    )}
                                </TableRow>
                            )))
                    }
                </TableBody>
            </Table>
        </TableContainer >

    )
}