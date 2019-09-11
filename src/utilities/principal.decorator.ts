import { createParamDecorator } from '@nestjs/common';

export const Principal = createParamDecorator((data, { principal }) => {
  return principal;
});
