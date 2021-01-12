import { Request, Response } from 'express'
import * as admin from 'firebase-admin'

export const roles = [undefined, 'editor', 'admin'] as const

export type TRole = typeof roles[number]
export type TResponseLocals = { uid: string, role: TRole, email: string }

export function handleError(res: Response, err: any, statusCode = 500) {
    return res.status(statusCode).send({ message: `${err.code} - ${err.message}` })
}

export async function isAuthenticated(req: Request, res: Response, next: Function) {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).send({ message: 'Unauthorized' })
    }
    
    if (!authorization.startsWith('Bearer')) {
        return res.status(401).send({ message: 'Unauthorized' })
    }
    
    const split = authorization.split('Bearer ')
    if (split.length !== 2) {
        return res.status(401).send({ message: 'Unauthorized' })
    }

    const token = split[1]

    try {
        const decodedToken = await admin.auth().verifyIdToken(token)

        res.locals = {
            ...res.locals,
            uid: decodedToken.uid,
            role: decodedToken.role,
            email: decodedToken.email,
        } as TResponseLocals

        return next()
    } catch (err) {
        return handleError(res, err, 401)
    }
}

export function isAuthorized(opts: { hasRole: TRole[], allowSameUser?: boolean }) {
    return (req: Request, res: Response, next: Function) => {
        const { uid, role } = res.locals as TResponseLocals
        const uidFromQuery = req.params.uid

        if (opts.allowSameUser && uid === uidFromQuery) {
            return next()
        }

        if (opts.hasRole.includes(role)) {
            return next()
        }

        return res.status(403).send({ message: 'Access denied' })
    }
}

export function validateUserRole(role: TRole) {
    return roles.includes(role)
}