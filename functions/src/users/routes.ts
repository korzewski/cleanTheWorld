import { Application } from 'express'
import { isAuthenticated, isAuthorized } from '../helpers'
import { getAllUsers, getUser, setUserRole } from './controller'

export function setUsersRoutes(app: Application) {
    app.get('/users',
        isAuthenticated,
        isAuthorized({ hasRole: ['editor', 'admin'] }),
        getAllUsers,
    )

    app.get('/users/:uid',
        isAuthenticated,
        isAuthorized({ hasRole: ['editor', 'admin'], allowSameUser: true }),
        getUser,
    )

    app.patch('/users/:uid/setRole/:role?',
        isAuthenticated,
        isAuthorized({ hasRole: ['admin'] }),
        setUserRole,
    )
}