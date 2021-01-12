import { Request, Response } from 'express'
import * as admin from 'firebase-admin'
import { handleError, validateUserRole } from '../helpers'

function mapUserData(user: admin.auth.UserRecord) {
    const role = user.customClaims?.role || ''

    return {
        uid: user.uid,
        email: user.email,
        displayName: user.email,
        role,
        lastSignInTime: user.metadata.lastSignInTime,
        creationTime: user.metadata.creationTime,
    }
}

export async function getAllUsers(req: Request, res: Response) {
    try {
        const usersList = await admin.auth().listUsers()
        const users = usersList.users.map(mapUserData)

        return res.status(201).send({
            users,
            params: req.params,
            locals: res.locals,
        })
    } catch (err) {
        return handleError(res, err)
    }
}

export async function setUserRole(req: Request, res: Response) {
    const { userId, role } = req.params

    if (!validateUserRole(role)) {
        return handleError(res, { message: 'Wrong params' }, 400)
    }
    
    try {
        await admin.auth().setCustomUserClaims(userId, {
            role,
        })
        
        return res.send({
            userId,
            role,
        })
    } catch (err) {
        return handleError(res, err)
    }
}