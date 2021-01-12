import { Application } from 'express'
import { isAuthenticated } from '../helpers'
import { getAllUsers, setUserRole } from './controller'

export function setUsersRoutes(app: Application) {
    app.get('/users',
        isAuthenticated,
        getAllUsers,
    )

    app.patch('/users/:userId/setRole/:role?',
        setUserRole,
    )
}