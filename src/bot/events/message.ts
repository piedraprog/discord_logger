import { Injectable, Logger } from '@nestjs/common';
import { Client, ColorResolvable, EmbedBuilder, TextChannel } from 'discord.js';
import { AppUpdate } from './appUpdate';
import { LOGGIN_TYPES } from 'src/common/enums/Loggin-types.enum';
import { LogginTypeDto } from 'src/common/dto/loggin-type.dto';

@Injectable()
export class botMessage {

  private readonly logger = new Logger(AppUpdate.name);

  public constructor(private readonly client: Client) { }

  async sendMessageTochannel(channelId: string, data: LogginTypeDto) {
    const channel = this.client.channels.cache.get(channelId) as TextChannel;

    if (!channel) {
      this.logger.error(`No se encontró el canal con ID: ${channelId}`);
      return;
    }

    const embedMessage = this.getEmbedTypeMessage(data);

    try {
      await channel.send({ embeds: [embedMessage] });
      this.logger.log(`Mensaje enviado al canal con ID: ${channelId}`);
    } catch (error) {
      this.logger.error(`Error al enviar el mensaje: ${error.message}`);
    }
  }

  getEmbedTypeMessage({ type, message, service, reason, timestamp }: LogginTypeDto) {
    let color: ColorResolvable;
    let title: string;

    switch (type) {
      case LOGGIN_TYPES.ERROR:
        color = "#ff5733"; // Rojo para errores
        title = 'Error';
        message = '@everyone: ' + message;
        break;

      case LOGGIN_TYPES.WARNING:
        color = "#ffcc00"; // Amarillo para advertencias
        title = 'Advertencia';
        break;

      case LOGGIN_TYPES.INFO:
        color = "#3399ff"; // Azul para información
        title = 'Información';
        break;

      case LOGGIN_TYPES.DEBUG:
        color = "#8c8c8c"; // Gris para debug
        title = 'Debug';
        break;

      case LOGGIN_TYPES.VERBOSE:
        color = "#00cc00"; // Verde para verbose
        title = 'Verbose';
        break;

      case LOGGIN_TYPES.CRITICAL:
        color = "#ff0000"; // Rojo intenso para críticos
        title = 'Crítico';
        message = '@everyone: ' + message;
        break;

      case LOGGIN_TYPES.TRACE:
        color = "#9999ff"; // Azul claro para trace
        title = 'Trace';
        break;

      default:
        color = "#cccccc"; // Color neutro para otros casos
        title = 'Mensaje';
        message = 'Tipo de mensaje no reconocido: ' + message;
        break;
    }

    return new EmbedBuilder()
      .setColor(color)
      .setAuthor({ name: title })
      .setTitle("Servicio: " + service)
      .addFields(
        { name: 'Reason', value: reason },
        { name: 'Message', value: message },
      )
      .setTimestamp(timestamp)

  }
}
