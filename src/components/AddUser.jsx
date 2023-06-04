import axios from "axios";
import React, { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { apiUrl } from "../url";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const createNewUser = async (data) => {
        console.log(data);
        try {
            const response = await axios.post(`${apiUrl}`, data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const mutation = useMutation(createNewUser, {
        onSuccess: () => {
            console.log("success");
            queryClient.invalidateQueries("users");
        },
    });

    const onSubmit = async () => {
        mutation.mutate({
            name: "Wedayes",
            email: "qwwdas@gmail.com",
            age: "23",
            gender: "male",
        });
    };

    useEffect(() => {
        if (mutation.isSuccess) {
            navigate("/");
        }
    }, [mutation.isSuccess, navigate]);

    return (
        <div>
            <button onClick={onSubmit}>Add User</button>
        </div>
    );
};

export default AddUser;
