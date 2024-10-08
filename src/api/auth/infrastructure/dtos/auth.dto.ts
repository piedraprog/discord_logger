import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AuthTypeDto {

  @ApiProperty({ description: 'El nombre del proyecto para el API KEY', example: 'discord' })
  @IsString()
  @IsNotEmpty()
  projectName: string;

}