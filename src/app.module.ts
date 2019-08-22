import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChattyModule } from './chatty/chatty.module';

@Module({
  imports: [ChattyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
