import { PartialType } from '@nestjs/mapped-types';
import { CreateUserapiDto } from './create-userapi.dto';

export class UpdateUserapiDto extends PartialType(CreateUserapiDto) {}
