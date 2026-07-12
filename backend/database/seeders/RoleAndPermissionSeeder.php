<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class RoleAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Define Permissions
        $permissions = [
            'create-listing',
            'edit-listing',
            'delete-listing',
            'publish-listing',
            'approve-listing',
            'manage-users',
            'manage-categories',
            'manage-business',
            'manage-jobs',
            'manage-vehicles',
            'manage-properties',
            'manage-news',
            'manage-payments',
        ];

        // Create Permissions
        foreach ($permissions as $permission) {
            Permission::findOrCreate($permission, 'api');
        }

        // Define Roles
        $roles = [
            'super-admin',
            'admin',
            'moderator',
            'business-owner',
            'employer',
            'agent',
            'dealer',
            'premium-user',
            'verified-user',
            'normal-user',
        ];

        // Create Roles and assign existing permissions
        foreach ($roles as $roleName) {
            $role = Role::findOrCreate($roleName, 'api');

            // Assign standard permissions to specific roles
            if ($roleName === 'super-admin') {
                // Super Admin gets all permissions
                $role->givePermissionTo(Permission::all());
            } elseif ($roleName === 'admin') {
                $role->givePermissionTo([
                    'create-listing',
                    'edit-listing',
                    'delete-listing',
                    'publish-listing',
                    'approve-listing',
                    'manage-users',
                    'manage-categories',
                    'manage-business',
                    'manage-jobs',
                    'manage-vehicles',
                    'manage-properties',
                    'manage-news',
                ]);
            } elseif ($roleName === 'moderator') {
                $role->givePermissionTo([
                    'edit-listing',
                    'publish-listing',
                    'approve-listing',
                    'manage-business',
                    'manage-jobs',
                    'manage-vehicles',
                    'manage-properties',
                ]);
            } elseif (in_array($roleName, ['business-owner', 'employer', 'agent', 'dealer', 'premium-user', 'verified-user', 'normal-user'])) {
                $role->givePermissionTo([
                    'create-listing',
                    'edit-listing',
                    'delete-listing',
                ]);
            }
        }

        // Create a default Super Admin user
        $superAdmin = User::firstOrCreate([
            'email' => 'admin@hoyamu.net',
        ], [
            'uuid' => (string) Str::uuid(),
            'first_name' => 'Super',
            'last_name' => 'Admin',
            'username' => 'superadmin',
            'phone' => '0770000000',
            'password' => Hash::make('Admin@123'), // Meets password complexity rules
            'status' => 'active',
        ]);

        $superAdmin->assignRole('super-admin');
    }
}
