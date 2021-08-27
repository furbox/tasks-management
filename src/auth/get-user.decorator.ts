import { createParamDecorator } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator((data, req): User => {
  const { args } = req;
  const [Request] = args;
  const { user } = Request;
  return user;
});
