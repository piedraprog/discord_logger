import { Injectable, Logger } from '@nestjs/common';
import { Client, TextChannel } from 'discord.js';
import { Once, Context, ContextOf, On } from 'necord';

@Injectable()
export class AppUpdate {
  private readonly logger = new Logger(AppUpdate.name);

  public constructor(private readonly client: Client) { }

  @Once('ready')
  public onReady(@Context() [client]: ContextOf<'ready'>) {
    this.logger.log(`Bot logged in as ${client.user.username}`);
  }
}
