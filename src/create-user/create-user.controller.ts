import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user-dto';
import { MailerService } from '@nestjs-modules/mailer';
import { SendMailProducerService } from 'src/jobs/sendMail-producer-service';

@Controller('create-user')
export class CreateUserController {
  constructor(private sendMailService: SendMailProducerService) {}
  @Post('/')
  async createUser(@Body() createUser: CreateUserDto) {
    await this.sendMailService.sendMail(createUser);
    return createUser;
  }
}
