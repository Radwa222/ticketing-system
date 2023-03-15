import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TicketsModule } from './tickets/tickets.module';
import { TicketStatusModule } from './ticket-status/ticket-status.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, TicketsModule, TicketStatusModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
