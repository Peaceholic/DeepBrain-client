import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { companyActions } from "../../redux/reducers/companyReducer.ts";
import tableStyles from "../../styles/table.module.css"

const AddCompany = () => {
    const [company, setCompany] = useState({
        companyName: "",
        sortCode: "",
        service: "",
        majorProduct: "",
        startDate: "",
        ceoName: "",
        webpage: "",
        region: ""
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setCompany({
            ...company,
            [name]: value
        });
    };

    const addCompanyHandler = (e) => {
        e.preventDefault();
        dispatch(companyActions.addCompanyRequest(company))
        setCompany({
            companyName: "",
            sortCode: "",
            service: "",
            majorProduct: "",
            startDate: "",
            ceoName: "",
            webpage: "",
            region: ""
        });
        window.location.href = '/board/companyList'
    };
    return (
        <form onSubmit={addCompanyHandler}>
            <table className={tableStyles.table}>
                <thead>
                    <tr>
                        <th colSpan={2}>
                            <h1>신규등록</h1>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>
                            <b>회사명</b>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="companyName"
                                value={company.companyName}
                                onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <b>종목코드</b>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="sortCode"
                                value={company.sortCode}
                                onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <td htmlFor="">
                            <b>서비스유형</b>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="service"
                                value={company.service}
                                onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <td htmlFor="">
                            <b>주요품목</b>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="majorProduct"
                                value={company.majorProduct}
                                onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <b>상장일</b>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="startDate"
                                value={company.startDate}
                                onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <b>대표자</b>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="ceoName"
                                value={company.ceoName}
                                onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <b>홈페이지</b>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="webpage"
                                value={company.webpage}
                                onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <b>지역</b>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="region"
                                value={company.region}
                                onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={2}>
                            <button type="submit">등록</button>
                            <br />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

export default AddCompany;