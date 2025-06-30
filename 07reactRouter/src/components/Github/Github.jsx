import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

        const data = useLoaderData()

    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch('https://api.github.com/users/vinay-v07')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    //     }, []);

    return (
        <div className="text-center m-4 bg-gray-500 text-white p-3 text-2xl">
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="git Picture" width={100}/>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vinay-v07');
    return response.json()
}
