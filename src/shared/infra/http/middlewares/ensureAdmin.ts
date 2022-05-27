import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../../../../modules/users/infra/prisma/repositories/UsersRepository";
import { AppError } from "../../../errors/AppError";


export async function ensureAdmin(request: Request, response: Response, next: NextFunction){

  const { id } = request.user;

  const usersRepository = new UsersRepository();
  const user = await  usersRepository.findById(id);

  if(!user){
    throw new AppError("User doesn't exist!");
  }

  if(!user.isAdmin){
    throw new AppError("User isn't admin!");
  }

  return next();
}