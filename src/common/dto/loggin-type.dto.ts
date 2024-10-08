import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsDate, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { LOGGIN_TYPES } from "src/common/enums/Loggin-types.enum";


export class LogginTypeDto {

  @ApiProperty({ description: 'Timestamp del log', example: '2024-10-09T12:34:56Z' })
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  timestamp: Date;

  @ApiProperty({ description: 'Tipo de log', enum: LOGGIN_TYPES })
  @IsEnum(LOGGIN_TYPES)
  @IsNotEmpty()
  type: LOGGIN_TYPES;

  @ApiProperty({ description: 'Servicio del cual se generó el log', example: 'AuthService' })
  @IsString()
  @IsNotEmpty()
  service: string;

  @ApiProperty({ description: 'Mensaje del log', example: 'Inicio de sesión exitoso' })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty({ description: 'Razón del log', example: 'Usuario autenticado correctamente' })
  @IsString()
  @IsNotEmpty()
  reason: string;

  @ApiProperty({ description: 'ID del usuario que generó la accion que generó el log', example: 'user123' })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ description: 'ID del canal al cual se envia el log', example: ['561818911881891891', '6518198189191'] })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  channelIds: string[];

  @ApiProperty({ description: 'IDs de los roles en el caso de querer mencionar a un usuario', example: ['1851891891891', '561189119981'], required: false })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  roleIds: string[];

}