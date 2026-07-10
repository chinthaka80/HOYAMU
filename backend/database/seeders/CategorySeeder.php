<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Jobs',
                'icon' => 'briefcase',
                'seo_description' => 'Browse vacancies and employment opportunities in Sri Lanka.',
                'subs' => ['Software & IT', 'Marketing & Sales', 'Engineering', 'Customer Service', 'Admin & HR']
            ],
            [
                'name' => 'Vehicles',
                'icon' => 'car',
                'seo_description' => 'Search cars, vans, motorbikes, three-wheels, and trucks for sale.',
                'subs' => ['Cars', 'Vans', 'Motorbikes', 'Three-Wheels', 'Trucks & Lorries', 'Auto Parts']
            ],
            [
                'name' => 'Properties',
                'icon' => 'home',
                'seo_description' => 'Find lands, houses, apartments, and offices for sale or rent.',
                'subs' => ['Lands', 'Houses', 'Apartments', 'Commercial Properties', 'Rooms & Annexes']
            ],
            [
                'name' => 'Business Directory',
                'icon' => 'compass',
                'seo_description' => 'Local directory listings for businesses and auto repair shops.',
                'subs' => ['Hotels & Tourism', 'Restaurants & Food', 'Hospitals & Medical', 'Schools & Education', 'Automotive Services']
            ],
            [
                'name' => 'Marketplace',
                'icon' => 'shopping-bag',
                'seo_description' => 'Buy and sell electronics, fashion, home furniture, pets, and tools.',
                'subs' => ['Electronics', 'Mobile Phones', 'Fashion & Beauty', 'Home Furniture', 'Pets & Animals']
            ],
            [
                'name' => 'News & Guides',
                'icon' => 'newspaper',
                'seo_description' => 'Latest marketplace updates, property guides, and local news.',
                'subs' => ['Market Guides', 'Property Insights', 'Automotive Tips', 'Company Announcements']
            ]
        ];

        foreach ($categories as $catData) {
            $parent = Category::create([
                'name' => $catData['name'],
                'slug' => Str::slug($catData['name']),
                'icon' => $catData['icon'],
                'seo_description' => $catData['seo_description'],
            ]);

            foreach ($catData['subs'] as $subName) {
                Category::create([
                    'name' => $subName,
                    'slug' => Str::slug($subName),
                    'icon' => $catData['icon'],
                    'parent_id' => $parent->id,
                    'seo_description' => $subName . ' sub-category.'
                ]);
            }
        }
    }
}
