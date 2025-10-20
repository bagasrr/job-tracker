<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ApplicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      DB::table('jobs_applications')->insert([ // DIUBAH
          [
              'companyName' => 'TechCorp',
              'position' => 'Software Engineer',
              'applicationPlatform' => 'LinkedIn',
              'applicationDate' => '2023-10-01',
              'status' => 'Applied',
              'statusUpdateDate' => null,
              'notes' => 'Submitted resume and cover letter.',
              'user_id' => 1, // Pastikan user dengan ID 1 ada
              'created_at' => now(),
          ],
          [
              'companyName' => 'InnovateX',
              'position' => 'Data Analyst',
              'applicationPlatform' => 'Company Website',
              'applicationDate' => '2023-10-05',
              'status' => 'Interview Scheduled',
              'statusUpdateDate' => '2023-10-10',
              'notes' => 'Interview scheduled for 2023-10-15.',
              'user_id' => 1, // Pastikan user dengan ID 1 ada
              'created_at' => now(),
          ],
          [
              'companyName' => 'WebSolutions',
              'position' => 'Frontend Developer',
              'applicationPlatform' => 'Indeed',
              'applicationDate' => '2023-10-07',
              'status' => 'Rejected',
              'statusUpdateDate' => '2023-10-12',
              'notes' => 'Received rejection email on 2023-10-12.',
              'user_id' => 2, // Pastikan user dengan ID 2 ada
              'created_at' => now(),
          ],
      ]);
    }
}