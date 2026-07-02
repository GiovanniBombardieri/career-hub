<?php

namespace Database\Seeders;

use App\Models\ContactRole;
use Illuminate\Database\Seeder;

class ContactRoleSeeder extends Seeder
{
    public function run(): void
    {
        $roles = [
            [
                'name' => 'Recruiter',
                'description' => 'Internal recruiter',
            ],
            [
                'name' => 'HR Manager',
                'description' => 'Human Resources manager',
            ],
            [
                'name' => 'Talent Acquisition',
                'description' => 'Talent Acquisition Specialist',
            ],
            [
                'name' => 'Engineering Manager',
                'description' => 'Engineering Manager',
            ],
            [
                'name' => 'Hiring Manager',
                'description' => 'Hiring Manager',
            ],
            [
                'name' => 'CTO',
                'description' => 'Chief Technology Officer',
            ],
            [
                'name' => 'Team Lead',
                'description' => 'Technical Team Lead',
            ],
            [
                'name' => 'Founder',
                'description' => 'Company Founder',
            ],
            [
                'name' => 'CEO',
                'description' => 'Chief Executive Officer',
            ],
            [
                'name' => 'Other',
                'description' => 'Other contact',
            ],
        ];

        foreach ($roles as $role) {
            ContactRole::firstOrCreate(
                ['name' => $role['name']],
                $role
            );
        }
    }
}
