import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateAuthorDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsOptional()
    contact?: string;

    @IsString()
    @IsOptional()
    bio?: string;

    @IsBoolean()
    @IsOptional()
    published?: boolean;
}
