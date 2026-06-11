// Public API for RoleModule
export { RoleModule } from './role.module';

// Decorator internals (consumed by guards, not by controllers directly)
export {
  PERMISSIONS_KEY,
  PermissionRequirement,
} from './decorators/permissions.decorator';
export { RequireRoles, ROLES_KEY } from './decorators/roles.decorator';

// Entities
export {
  ActionType,
  Permission,
  PermissionModule,
} from './entities/permission.entity';
export { ModuleEntity } from './entities/module.entity';
export { RolePermission } from './entities/role-permission.entity';
export { Role } from './entities/role.entity';

// Guards (applied via @UseGuards or as global providers)
export { RolesGuard } from './guards/roles.guard';
