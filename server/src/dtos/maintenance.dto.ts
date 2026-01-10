import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MaintenanceAction } from 'src/enum';
import { ValidateEnum, ValidateString } from 'src/validation';

export class SetMaintenanceModeDto {
  @ApiProperty({ description: 'Maintenance action', enum: MaintenanceAction })
  @ValidateEnum({ enum: MaintenanceAction, name: 'MaintenanceAction' })
  action!: MaintenanceAction;
}

export class MaintenanceLoginDto {
  @ApiPropertyOptional({ description: 'Maintenance token' })
  @ValidateString({ optional: true })
  token?: string;
}

export class MaintenanceAuthDto {
  @ApiProperty({ description: 'Maintenance username' })
  username!: string;
}
