import { NextFunction, Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { verify } from 'jsonwebtoken'
import { UsersRepository } from "../../../../modules/users/infra/prisma/repositories/UsersRepository";

interface IPayLoad {
  sub: string
}


export async function ensureAuthenticated( request: Request, response: Response, next: NextFunction){

  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError("Token missing!")
  }

  const [, token] = authHeader.split(" ")

  try {
    let { sub: user_id } = verify(token, "52e09ebca6f8ed074aa1296f0dcbf0ec") as IPayLoad

    const usersRepository = new UsersRepository()
    const user = usersRepository.findById(user_id)
    
    if(!user) {
      throw new AppError("User does not exists!", 401)
    }

    request.user = {
      id: user_id
    }
    next()
  } catch {
    throw new AppError("Invalid token!");
  }
}