import {getRepository} from 'typeorm';
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken';

import User from '../models/User';

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
      throw new Error('Incorrect e-mail/password combination.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched){
      throw new Error('Incorrect e-mail/password combination.');
    }

    const token = sign({}, '1cc3c7d4bf5d08368fa3a176c05298d9', {
      subject: user.id,
      expiresIn: '1d',

    }

    );

    return {
      user,
      token,
    }
  }
}

export default AuthenticateUserService;
