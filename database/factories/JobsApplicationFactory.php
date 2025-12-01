<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\JobsApplication>
 */
class JobsApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
{
    return [
        'companyName' => $this->faker->company(),
        'position' => $this->faker->jobTitle(),
        'applicationPlatform' => $this->faker->randomElement(['LinkedIn', 'JobStreet', 'Glints', 'Website']),
        'applicationDate' => $this->faker->dateTimeBetween('-1 year', 'now'),
        'status' => $this->faker->randomElement(['Ghosted', 'Hired', 'SkillTest']),
        'statusUpdateDate' => $this->faker->dateTimeBetween('-1 month', 'now'),
        'notes' => $this->faker->sentence(),
        'user_id' => 1, // Pastikan ID 1 ada, atau gunakan User::factory()
        'created_at' => now(),
        'updated_at' => now(),
    ];
}

}