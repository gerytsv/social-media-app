import { createParamDecorator } from '@nestjs/common';

// tslint:disable-next-line: variable-name
export const Token = createParamDecorator(
  (_, request) => request.headers.authorization,
);
