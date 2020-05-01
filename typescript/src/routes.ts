import { Request, Response } from 'express';
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Bruno',
    email: 'bruno@mail.com',
    password: '12312321',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      {title: 'Javascript', experience: 100 }
    ]
  });

  return response.json({message: 'Hello world '})
} 