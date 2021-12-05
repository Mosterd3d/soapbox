<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         \App\Models\Product::factory(10)->create();
    }
}


//namespace Database\Seeders;
//
//use Illuminate\Support\Facades\DB;
//use Carbon\Carbon;
//use Illuminate\Database\Seeder;
//use Illuminate\Support\Str;
//
//class DatabaseSeeder extends Seeder
//{
//    /**
//     * Seed the application's database.
//     *
//     * @return void
//     */
//    public function run()
//    {
//        foreach (range(1, 10) as $x) {
//            DB::table('products')->insert([
//                'name' => Str::random(10) . '_' . $x,
//                'stock' => rand(0, 10),
//                'price' => (rand(1, 1000) / 100),
//                'created_at' => Carbon::now()->toDateTimeString(),
//            ]);
//        }
//    }
//}
