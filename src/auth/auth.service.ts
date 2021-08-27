import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}

  async signUp(authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
    return this.userRepository.signUp(authCredentialsDTO);
  }

  async signIn(authCredentialsDTO: AuthCredentialsDTO): Promise<string> {
    const username = await this.userRepository.validateUserPassword(
      authCredentialsDTO,
    );
    if (!username) {
      throw new UnauthorizedException('Invalid Credentials');
    }
    return username;
  }
}
