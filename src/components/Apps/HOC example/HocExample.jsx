import React from "react";
import withLoader from "./withLoader";


export const UserInfo = () => {
    const user = {
        name: 'Burak Karhan',
        email: 'aburakkarhan@gmail.com',
        linkedin: 'https://www.linkedin.com/in/ahmet-burak-karhan-972911153/'
    }
    
    return (
        <div>
            <p> Name: {user.name} </p> 
            <p> Email: {user.email} </p>
            <p> Linkedin: <a href={user.linkedin} target="_blank"> {user.linkedin} </a> </p>
        </div>
    )
}

const UserWithLoader = withLoader(UserInfo);

const HocExample = () => {
    return (
        <div style={{marginTop: '2rem'}}>
            <UserWithLoader />
        </div>
    )
}

export default HocExample;