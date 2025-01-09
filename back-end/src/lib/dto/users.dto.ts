import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsOptional, IsString } from 'class-validator';
import { SWAGGER_EXAMPLE } from '../constants/swagger';

export class LogInDetailDto {
  @ApiProperty({ example: SWAGGER_EXAMPLE.DEVICE_ID })
  @IsString()
  device_id: string;

  @ApiProperty({ example: SWAGGER_EXAMPLE.DEVICE_TYPE })
  @IsString()
  device_type: string;

  @ApiProperty({ example: SWAGGER_EXAMPLE.ACCESS_TOKEN })
  @IsOptional()
  @IsString()
  access_token: string;
}

export class SignDto {
  @ApiProperty({ example: SWAGGER_EXAMPLE.PHONE_NUMBER })
  @IsString()
  phone_number: string;

  @ApiProperty({ example: SWAGGER_EXAMPLE.ISD_CODE })
  @IsString()
  isd_code: string;

  @ApiProperty()
  @IsObject()
  login_details: LogInDetailDto;

  @ApiProperty({ example: SWAGGER_EXAMPLE.USER_NAME })
  @IsString()
  user_name: string;

  @ApiProperty({ example: SWAGGER_EXAMPLE.PROFILE_IMAGE })
  @IsOptional()
  @IsString()
  profile_image?: string;
}
