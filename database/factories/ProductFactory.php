<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->firstNameMale(),
            'stock' => $this->faker->numberBetween(0,10),
            'price' => $this->faker->randomFloat(2,0,10),
            'created_at' => now(),
        ];
    }
}
