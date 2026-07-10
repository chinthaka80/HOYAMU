<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Seed Provinces
        $provinces = [
            ['id' => 1, 'name' => 'Western'],
            ['id' => 2, 'name' => 'North Western'],
            ['id' => 3, 'name' => 'Central'],
            ['id' => 4, 'name' => 'Southern'],
        ];
        DB::table('provinces')->insert($provinces);

        // Seed Districts
        $districts = [
            ['id' => 1, 'province_id' => 1, 'name' => 'Colombo'],
            ['id' => 2, 'province_id' => 1, 'name' => 'Gampaha'],
            ['id' => 3, 'province_id' => 2, 'name' => 'Kurunegala'],
            ['id' => 4, 'province_id' => 3, 'name' => 'Kandy'],
            ['id' => 5, 'province_id' => 4, 'name' => 'Galle'],
        ];
        DB::table('districts')->insert($districts);

        // Seed Cities
        $cities = [
            ['district_id' => 1, 'name' => 'Nugegoda'],
            ['district_id' => 1, 'name' => 'Colombo 3'],
            ['district_id' => 1, 'name' => 'Colombo 7'],
            ['district_id' => 2, 'name' => 'Negombo'],
            ['district_id' => 2, 'name' => 'Kelaniya'],
            ['district_id' => 3, 'name' => 'Kurunegala Town'],
            ['district_id' => 4, 'name' => 'Kandy City'],
            ['district_id' => 5, 'name' => 'Galle Fort'],
        ];
        DB::table('cities')->insert($cities);
    }
}
