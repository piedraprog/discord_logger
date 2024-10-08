import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { botMessage } from 'src/bot/events/message';
import { LogginTypeDto } from 'src/common/dto/loggin-type.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseDto } from 'src/common/dto/response.dto';

@ApiTags('logger')
@Controller('logger')
export class MessageController {

  constructor(private readonly botMessage: botMessage) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: LogginTypeDto })
  @ApiResponse({ 
    status: 200,
    description: 'Mensajes enviados a los canales especificados.',
    type: ResponseDto
  })
  async sendMessages(
    @Body() Body: LogginTypeDto
  ) {

    for (const channelId of Body.channelIds) {
      await this.botMessage.sendMessageTochannel(channelId, Body);
    }

    return { success: true, message: 'Mensajes enviados a los canales especificados.' };
  }
}
