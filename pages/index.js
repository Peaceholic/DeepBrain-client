import React, { useEffect } from 'react';
import tableStyles from './../styles/table.module.css'
import axios from "axios";

export default function Home() {

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/now")
            .then((res) => {
                var data = res.data;
                console.log(data);
                document
                    .getElementById("timeZone")
                    .innerHTML = '<h3>Server Connected, Server Time:' + data.now + '<h3>'
            });
    }, []);

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