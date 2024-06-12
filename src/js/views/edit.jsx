import React from 'react';
import { useParams } from 'react-router';

export const Edit = () => {

    const params = useParams()
    console.log(params)

    return (
        <p>my edit views</p>
    )
}