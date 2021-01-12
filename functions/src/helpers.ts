import { Request, Response } from 'express'
import * as admin from 'firebase-admin'

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
        }

        return next()
    } catch (err) {
        return handleError(res, err, 401)
    }
}

export function validateUserRole(role: string) {
    const roles = [undefined, 'editor', 'admin']

    return roles.includes(role)
}