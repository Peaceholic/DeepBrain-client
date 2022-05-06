import React, { useEffect } from 'react';
import tableStyles from './../styles/table.module.css'
import axios from "axios";

export default function Home() {
    return (
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th>
                        <h2>
                            코스닥 상장목록
                        </h2>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>

                </tr>
            </tbody>
        </table>
    )
}