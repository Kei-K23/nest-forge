// Public API for RoleModule
export { RoleModule } from './role.module';
export { RequirePermissions } from './decorators/permissions.decorator';
export {
  PERMISSIONS_KEY,
  PermissionRequirement,
} from './decorators/permissions.decorator';
export { RequireRoles, ROLES_KEY } from './decorators/roles.decorator';
export {
  ActionType,
  Permission,
  PermissionModule,
} from './entities/permission.entity';
export { ModuleEntity } from './entities/module.entity';
export { RolePermission } from './entities/role-permission.entity';
export { Role } from './entities/role.entity';
export { PermissionsGuard } from './guards/permissions.guard';
export { RolesGuard } from './guards/roles.guard';
export { CreateRoleDto } from './dto/create-role.dto';
export { FilterRoleDto } from './dto/filter-role.dto';
export { UpdateRoleDto } from './dto/update-role.dto';
export { RoleService } from './services/role.service';
