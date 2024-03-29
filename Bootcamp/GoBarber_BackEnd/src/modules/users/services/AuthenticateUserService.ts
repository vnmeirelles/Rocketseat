import {getRepository} from 'typeorm';
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken';
import User from '../infra/typeorm/entities/User';
import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';

interface Request {
  email: string;
  password:string;
}

interface Response{
  user: User;
  token: string;
}

class AuthenticateUserService{
  public async execute({email, password}:Request): Promise<Response>{
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({where: {email:email}});

    if (!user){
      throw new AppError('Incorrect e-mail/password combination.',401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched){
      throw new AppError('Incorrect e-mail/password combination.',401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    }

    );

    return {
      user,
      token,
    }
  }
}

export default AuthenticateUserService;
