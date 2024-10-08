import { Module } from '@nestjs/common';
import { IntentsBitField } from 'discord.js';
import { NecordModule } from 'necord';
import { AppUpdate } from './events/appUpdate';
import { botMessage } from './events/message';

@Module({
  providers: [
    AppUpdate, 
    botMessage
  ],
  exports: [],
  imports: [
    NecordModule.forRoot({
      token: process.env.DISCORD_TOKEN,
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.DirectMessages
      ]
    }),
  ],
})
export class BotModule { }
