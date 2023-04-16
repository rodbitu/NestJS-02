import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { MailerService } from '@nestjs-modules/mailer';

@Processor('sendMail-queue')
class SendMailConsumer {
  constructor(private mailService: MailerService) {}

  @Process('sendMail-job')
  async sendMailJob(job: Job) {
    const { data } = job;

    await this.mailService.sendMail({
      to: data.email,
      from: 'Eqipe ENACOM',
      subject: 'Seja bem vindo(a)',
      text: `Olá ${data.name}, seu cadastro foi realizado com sucesso, seja bem vindo(a)!`,
    });
  }
}

export { SendMailConsumer };
