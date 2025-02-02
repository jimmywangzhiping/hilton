import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Logger } from '../../utils/log4js';


@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    console.log('1111133331111',request)
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    console.log(status);


    const logFormat = `
    Request original url: ${request.originalUrl}
    Method: ${request.method}
    timestamp: new Date().toISOString()
    IP: ${request.ip}
    Status code: ${status}
    Response: ${exception.toString()}`;
    // Logger.info(logFormat);

    console.log(logFormat);

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.toString(),
    });
  }
}
