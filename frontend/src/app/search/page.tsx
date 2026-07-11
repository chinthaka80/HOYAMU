'use client';

import React, { useState } from 'react';
import { Search, MapPin, Grid, List, SlidersHorizontal, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SearchPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [district, setDistrict] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  // Mock results datasets
  const searchResults = [
    {
      id: 1,
      title: 'Toyota Aqua S Grade 2018',
      price: 'LKR 6,850,000',
      location: 'Nugegoda, Colombo',
      category: 'Vehicles',
      views: 124,
      isVerified: true,
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&auto=format&fit=crop&q=60',
    },
    {
      id: 2,
      title: '3 Bedroom Luxury Apartment',
      price: 'LKR 28,000,000',
      location: 'Colombo 3',
      category: 'Properties',
      views: 98,
      isVerified: true,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&auto=format&fit=crop&q=60',
    },
    {
      id: 3,
      title: 'Software Engineer vacancy (React/PHP)',
      price: 'LKR 150,000 /mo',
      location: 'Colombo 2',
      category: 'Jobs',
      views: 240,
      isVerified: false,
      image: '',
    },
    {
      id: 4,
      title: 'Nuwan Auto repair Center profile',
      price: 'Free Quote',
      location: 'Galle Face, Colombo',
      category: 'Directory',
      views: 345,
      isVerified: true,
      image: '',
    },
  ];

  return (
    <div className="flex-1 w-full bg-[#FAFAFA] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#6B7280] mb-4">
          <a href="/" className="hover:underline">Home</a>
          <span className="mx-2">&gt;</span>
          <span className="text-[#222222] font-medium">Search Results</span>
        </nav>

        {/* Global Search inputs layout */}
        <div className="bg-white border border-[#E5E7EB] p-4 rounded-2xl mb-8 flex flex-col md:flex-row gap-3 shadow-sm">
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#6B7280]">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Fuzzy search matching key terms..."
              className="w-full h-11 pl-10 pr-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:border-[#E25704] focus:bg-white"
            />
          </div>
          <button className="h-11 px-6 bg-[#E25704] hover:bg-[#C94D03] text-white font-semibold rounded-xl text-sm transition-all">
            Update Search
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6 bg-white border border-[#E5E7EB] p-6 rounded-2xl h-fit shadow-sm">
            <div className="flex justify-between items-center pb-4 border-b border-[#E5E7EB]">
              <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wider flex items-center gap-1.5">
                <SlidersHorizontal size={16} />
                Filters
              </h3>
              <button className="text-xs text-[#E25704] font-semibold hover:underline">Clear all</button>
            </div>

            {/* Category Select */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-[#222222] uppercase tracking-wider">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full h-10 px-3 bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl text-xs text-[#222222] focus:outline-none"
              >
                <option value="">All Categories</option>
                <option value="Jobs">Jobs</option>
                <option value="Vehicles">Vehicles</option>
                <option value="Properties">Properties</option>
                <option value="Directory">Business Directory</option>
              </select>
            </div>

            {/* District Select */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-[#222222] uppercase tracking-wider">District</label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full h-10 px-3 bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl text-xs text-[#222222] focus:outline-none"
              >
                <option value="">All Districts</option>
                <option value="Colombo">Colombo</option>
                <option value="Gampaha">Gampaha</option>
                <option value="Kandy">Kandy</option>
                <option value="Kurunegala">Kurunegala</option>
              </select>
            </div>

            {/* Price Range Select */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-[#222222] uppercase tracking-wider">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full h-10 px-3 bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl text-xs text-[#222222] focus:outline-none"
              >
                <option value="">Any Price</option>
                <option value="under-1m">Under LKR 1,000,000</option>
                <option value="1m-5m">LKR 1M to 5M</option>
                <option value="5m-10m">LKR 5M to 10M</option>
                <option value="above-10m">Above LKR 10M</option>
              </select>
            </div>

            {/* Verified listings Toggle */}
            <div className="flex items-center pt-2">
              <input
                type="checkbox"
                id="verifiedOnly"
                checked={isVerified}
                onChange={(e) => setIsVerified(e.target.checked)}
                className="h-4 w-4 rounded border-[#E5E7EB] text-[#E25704] focus:ring-[#E25704]"
              />
              <label htmlFor="verifiedOnly" className="ml-2 text-xs font-medium text-[#6B7280] select-none">
                Verified Members Only
              </label>
            </div>
          </div>

          {/* Search Results list */}
          <div className="lg:col-span-3 space-y-6">
            {/* Toolbar */}
            <div className="flex justify-between items-center bg-white border border-[#E5E7EB] px-6 py-3 rounded-2xl shadow-sm">
              <p className="text-xs text-[#6B7280]">
                Showing <span className="font-semibold text-[#222222]">4</span> results matching search criteria
              </p>
              
              <div className="flex items-center gap-4">
                {/* View Mode triggers */}
                <div className="flex border border-[#E5E7EB] rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 ${viewMode === 'grid' ? 'bg-[#FAFAFA] text-[#E25704]' : 'bg-white text-[#6B7280]'}`}
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 border-l border-[#E5E7EB] ${viewMode === 'list' ? 'bg-[#FAFAFA] text-[#E25704]' : 'bg-white text-[#6B7280]'}`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Listings Grid */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-4'}>
              {searchResults.map((ad) => (
                <div
                  key={ad.id}
                  className={`bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:shadow-sm transition-all flex ${
                    viewMode === 'grid' ? 'flex-col' : 'flex-col md:flex-row'
                  }`}
                >
                  {/* Card Thumbnail */}
                  <div className={`bg-[#E5E7EB] flex items-center justify-center relative flex-shrink-0 ${
                    viewMode === 'grid' ? 'h-48 w-full' : 'h-48 w-full md:w-48'
                  }`}>
                    {ad.image ? (
                      <img src={ad.image} alt={ad.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">{ad.category}</span>
                    )}
                    {ad.isVerified && (
                      <span className="absolute top-3 left-3 text-[10px] font-semibold bg-[#D4AF37] text-white px-2 py-0.5 rounded-full flex items-center gap-0.5 shadow-sm">
                        <CheckCircle2 size={10} />
                        Verified
                      </span>
                    )}
                  </div>

                  {/* Card Details */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[10px] font-bold text-[#E25704] uppercase tracking-wider bg-[#E25704]/10 px-2 py-0.5 rounded-full">
                        {ad.category}
                      </span>
                      <h3 className="text-base font-bold text-[#222222] mt-2 line-clamp-1">{ad.title}</h3>
                      <p className="text-xs text-[#6B7280] mt-1 flex items-center gap-1">
                        <MapPin size={12} />
                        {ad.location}
                      </p>
                    </div>

                    <div className="flex justify-between items-end mt-4 pt-4 border-t border-[#FAFAFA]">
                      <div>
                        <span className="block text-[10px] text-[#9CA3AF] uppercase font-medium">Price</span>
                        <span className="text-base font-bold text-[#16A34A]">{ad.price}</span>
                      </div>
                      <Button variant="outline" size="sm" className="h-8 rounded-lg text-xs border-[#E5E7EB] text-[#222222] font-semibold hover:bg-[#FAFAFA]">
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-2 pt-6">
              <Button disabled variant="outline" size="sm" className="h-8 rounded-lg text-xs border-[#E5E7EB]">
                Previous
              </Button>
              <Button size="sm" className="h-8 w-8 rounded-lg text-xs bg-[#E25704] hover:bg-[#C94D03] text-white font-semibold">
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 rounded-lg text-xs border-[#E5E7EB] text-[#222222]">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
