import { Application } from 'express'
import { isAuthenticated, isAuthorized } from '../helpers'
import { getAllUsers, setUserRole } from './controller'

export function setUsersRoutes(app: Application) {
    app.get('/users',
        isAuthenticated,
        isAuthorized({ hasRole: ['editor', 'admin'] }),
        getAllUsers,
    )

    app.patch('/users/:uid/setRole/:role?',
        isAuthenticated,
        isAuthorized({ hasRole: ['admin'] }),
        setUserRole,
    )
}