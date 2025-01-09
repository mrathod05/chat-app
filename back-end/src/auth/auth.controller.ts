import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignDto } from 'src/lib/dto/users.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sing-in')
  @ApiOperation({ summary: 'To sign-in user' })
  signIn(@Body() body: SignDto): Promise<void | TypeApiResponse> {
    return this.authService.signIn(body);
  }
}
