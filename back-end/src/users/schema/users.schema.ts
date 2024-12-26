import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'users', timestamps: true, versionKey: false })
export class User {
  @Prop() user_name: string;
  @Prop() phone_number: string;
  @Prop() isd_code: string;
  @Prop() profile_image: string;
  @Prop() is_active: string;
  @Prop() is_deleted: string;
  @Prop() login_details: UserLoginDevice[];
}

export const UserSchema = SchemaFactory.createForClass(User);
