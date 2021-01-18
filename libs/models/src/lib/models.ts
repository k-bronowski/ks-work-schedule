import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { ApiBearerAuth, ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger'


export function models(): string {
  return 'models';
}


@Entity()
export class User {

  @ApiProperty()
  @PrimaryColumn({ type: 'varchar', length: 30 })
  username?: string;

  @Column({ type: 'varchar', length: 30 })
  @ApiProperty()
  firstName: string;

  @Column({ type: 'varchar', length: 30 })
  @ApiProperty()
  lastName: string;

  @Column({ default: true })
  @ApiProperty()
  isActive: boolean;
}

@Entity()
export class AuthData {
  @OneToOne(() => User, { primary: true })
  @JoinColumn({ name: 'username' })
  @ApiProperty({ type: 'string' })
  username: User;

  @Column({ type: 'varchar' })
  @ApiProperty()
  password: string;
}
