import { ParseUUIDPipe, Injectable, ArgumentMetadata } from '@nestjs/common';

// The enhancement here is to improve understandability of the UUID error message
@Injectable()
export class EnhancedParseUUIDPipe extends ParseUUIDPipe {
    async transform(
        value: string,
        metadata: ArgumentMetadata
    ): Promise<string> {
        try {
            return await super.transform(value, metadata);
        } catch {
            throw this.exceptionFactory(
                `ID has to be of the UUID v5 form, but was given ${value}.`
            );
        }
    }
}
