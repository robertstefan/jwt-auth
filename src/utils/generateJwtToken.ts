import jwt, { Jwt, JwtPayload } from 'jsonwebtoken';
import { UserDocument } from '../types/userType';

export function generateJwtToken(user: UserDocument): string {
  return jwt.sign(
    {
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
    },
    process.env.JWT_SECRET_KEY as string,
    {
      expiresIn: '1h',
    }
  );
}

export function checkToken(token: string): string {
  const status = <JwtPayload>(
    jwt.verify(token, <string>process.env.JWT_SECRET_KEY)
  );

  return status.email;
}
