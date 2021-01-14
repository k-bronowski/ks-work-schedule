import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  login: string;

  @ApiProperty({ nullable: true })
  password?: string;
}
