import { Request, Response } from 'express';
import createUser from './services/CreateUser'

export function helloWord(request: Request, response: Response) {
  const user = createUser({
    name: 'Patrick',
    email: 'patrick@email.com',
    password: '123456',
    techs: [
      'React',
      'React Native',
      { title: 'javascript', experience: 1000 }
    ],
  });

  return response.json({ message: 'Hello world!' });
}