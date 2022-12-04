import { Injectable } from '@nestjs/common';
import { User } from 'shared-types';

@Injectable()
export class AppService {
  getData(): User {
    return { username: 'Shawn', password: 'test' };
  }
}
