"use client"

import { useEffect, useState } from "react";
import axios from "axios";

export default function Result() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_URL);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-green-200 p-4 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold mb-4">DynamoDB データ</h1>
    <ul>
      {data.map((item, index) => (
        <li key={index} className="mb-2">
          <strong className="text-green-700">タイトル:</strong> {item.Title.S},{" "}
          <strong className="text-green-700">ユーザーID:</strong> {item.User_id.S}
        </li>
      ))}
    </ul>
  </div>
  );
}
