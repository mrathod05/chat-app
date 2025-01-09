import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'users', timestamps: true, versionKey: false })
export class User {
  @Prop() user_name: string;
  @Prop({ unique: true, index: true }) phone_number: string;
  @Prop() isd_code: string;
  @Prop() profile_image: string;
  @Prop({ default: false }) is_active: string;
  @Prop({ default: false }) is_deleted: string;
  @Prop() login_details: LoginDeviceDto[];
}

export const UserSchema = SchemaFactory.createForClass(User);
