import { ApiProperty } from '@nestjs/swagger';

export class ResponseAuthDto {
  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: 'Api key generada correctamente' })
  message: string;


  @ApiProperty({ example: 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJwcm13271234uhavdwvayydvyvASAS123AZADDADSNzI4NTEyNjI3fQ.ngdRYpDf0mHymWWeBOIpp==ADSADFA233131n4fGnS5FZRBrpqpLGd7s' })
  data: string;
}