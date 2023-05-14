import { AppContext } from './AppContext.js'
import { check } from '../http/userAPI.js'
import { useContext, useEffect, useState } from 'react'


const CheckAuth = (props) => {
    const { user } = useContext(AppContext)
    const [checking, setChecking] = useState(true)
    
    useEffect(() => {
        check()
            .then(data => {
                if (data) {
                    user.login(data)
                }
            })
            .finally(
                () => setChecking(false)
            )
    }, [user])

    if (checking) {
        return (
            <section>Загрузка...</section>
        )
    }

    return props.children
}

export default CheckAuth