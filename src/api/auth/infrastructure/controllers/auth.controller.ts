import { Body, Controller, Post } from '@nestjs/common';
import { AuthTypeDto } from '../dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseAuthDto } from '../dtos/response-auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

  constructor(
    private jwtService: JwtService,
  ) { }

  @Post()
  @ApiBody({ type: AuthTypeDto })
  @ApiResponse({ 
    status: 200,
    description: 'Mensajes enviados a los canales especificados.',
    type: ResponseAuthDto
  })
  auth(@Body() Body: AuthTypeDto) {

    const { projectName } = Body;

    const payload = {
      projectName
    };

    const apiKey = this.jwtService.sign(payload, 
      {
        algorithm: 'HS384',
      }
    );


    return {
      success: true,
      message: 'Api key generada correctamente',
      data: apiKey,
    };
  }
}
