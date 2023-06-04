import axios from "axios";
import React from "react";
import { useQuery, useMutation } from "react-query";
import { apiUrl } from "../url";

const getAllUsers = async () => {
    try {
        const result = await axios.get(`${apiUrl}`);
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};

const AllUsers = () => {
    const { data, isLoading, isError, error } = useQuery("users", getAllUsers);

    return (
        <div>
            <h1>All Users</h1>
            {isLoading && <div>Loading...</div>}
            {isError && <div>{error.message}</div>}
            {data &&
                data.map((user) => (
                    <div
                        style={{
                            border: "1px solid black",
                            padding: "10px",
                            textAlign: "center",
                        }}
                        key={user.id}
                    >
                        {user.name}
                    </div>
                ))}
        </div>
    );
};

export default AllUsers;
