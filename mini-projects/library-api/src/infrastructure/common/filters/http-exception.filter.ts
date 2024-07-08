import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const message = exception.getResponse();
        const status = exception.getStatus();


        /*

            TODO : Make this cleaner
            Idk how to make the global HTTP filter handle the specific HTTP filters I've set in the submodules 
            The specific filters themselves have custom messages/errors thrown so I thought that 
            when exception.getResponse() is an object it would mean that it's an error I've handled already

        */
        if (typeof message === 'string') {
            response.status(status).json({
                statusCode: status,
                message: message,
                timestamp: new Date().toISOString(),
                path: request.url
            });
        } else if (typeof message === 'object') {
            response.status(status).json({
                ...message,
                ...{
                    timestamp: new Date().toISOString(),
                    path: request.url
                }
            });
        }
    }
}
