import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { CreateUserDto } from 'src/create-user/create-user-dto';

@Injectable()
class SendMailProducerService {
  constructor(@InjectQueue('sendMail-queue') private queue: Queue) {}

  async sendMail(createUserDto: CreateUserDto) {
    await this.queue.add('sendMail-job', createUserDto);
  }
}

export { SendMailProducerService };
