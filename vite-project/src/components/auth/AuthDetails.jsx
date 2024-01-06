import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
export default function AuthDetails() {
    const [authUser , setAuthUser] = useState(null)
    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user) =>{
            if (user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        })
            return () =>{
                listen()
            }
    }, [])

    const usersignOut = () =>{
        signOut(auth).then(() =>{
            console.log("sign out suscefl")
        }).catch(err =>{
            console.log(err)
        })
    }

  return (
    <div>{ authUser ? <><p>{`Signed in as ${authUser.email}`}</p><button onClick={usersignOut}>Sign Out</button></> : <p>Signed Out</p>}</div>
  )
}
