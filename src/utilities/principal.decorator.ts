import { createParamDecorator } from '@nestjs/common';

export const Principal = createParamDecorator((_, { user: principal }) => {
  return principal;
});
