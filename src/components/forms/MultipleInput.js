import React, { useState } from 'react'

const MultipleInput = () => {

    const [userRegitraion, setUserRegitraion] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirm: ""
    })

    const [records, setRecords] = useState([])

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserRegitraion({ ...userRegitraion, [name]: value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        // for sorting data
        const newRecord = { ...userRegitraion, id: new Date().getTime().toString() }
        console.log(records)
        setRecords([...records, newRecord])
        console.log(records)

        //for clean data 
        setUserRegitraion({ username: "", email: "", phone: "", password: "", confirm:""})
    }

    return (
        <>
            <form className='form' action='' onSubmit={handleSubmit}>
                <div>
                    <div className='title'>Registration Form</div>
                    <label className='user-details' htmlFor='username'>Full name</label>
                    <input type='text' className='input-box' autoComplete='off'
                        value={userRegitraion.username}
                        onChange={handleInput}
                        name='username' id='username'></input>
                </div>
                <div>
                    <label className='user-details' htmlFor='email'>email</label>
                    <input type='text' className='input-box' autoComplete='off'
                        value={userRegitraion.email}
                        onChange={handleInput}
                        name='email' id='email'></input>
                </div>
                <div>
                    <label className='user-details' htmlFor='phone'>phone</label>
                    <input type='text' className='input-box' autoComplete='off'
                        value={userRegitraion.phone}
                        onChange={handleInput}
                        name='phone' id='phone'></input>
                </div>
                <div>
                    <label className='user-details' htmlFor='password'>password</label>
                    <input type='password' className='input-box' autoComplete='off'
                        value={userRegitraion.password}
                        onChange={handleInput}
                        name='password' id='password'></input>
                </div>
                <div>
                    <label className='user-details' htmlFor='confirm'>confirm password</label>
                    <input type='confirm' className='input-box' autoComplete='off'
                        value={userRegitraion.confirm}
                        onChange={handleInput}
                        name='confirm' id='confirm'></input>
                </div>
                <button className='register' type='submit'>Registration</button>
            </form>

            {/* for loop */}
            <div>
                {
                    records.map((curElem) => {
                        const { id, username, email, phone, password, confirm } = curElem;
                        return (
                            <div className='showdata' key={curElem.id}>
                                <p>{username}</p>
                                <p>{email}</p>
                                <p>{phone}</p>
                                <p>{password}</p>
                                <p>{confirm}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MultipleInput