import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users.schema';

export const UserModel = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
]);
