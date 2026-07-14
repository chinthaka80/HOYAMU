'use client';

import React from 'react';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import ListingCard from '@/components/ListingCard';
import BusinessCard from '@/components/BusinessCard';
import JobCard from '@/components/JobCard';
import VehicleCard from '@/components/VehicleCard';
import PropertyCard from '@/components/PropertyCard';
import NewsCard from '@/components/NewsCard';
import { Car, Home, Briefcase, FolderSearch, Newspaper, Store, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const categories = [
    { title: 'Vehicles', icon: <Car size={24} />, count: '1,240 Ads', link: '/vehicles', colorClass: 'bg-blue-500/10 text-blue-500' },
    { title: 'Properties', icon: <Home size={24} />, count: '890 Ads', link: '/properties', colorClass: 'bg-green-500/10 text-green-500' },
    { title: 'Jobs Board', icon: <Briefcase size={24} />, count: '450 Openings', link: '/jobs', colorClass: 'bg-purple-500/10 text-purple-500' },
    { title: 'Marketplace', icon: <FolderSearch size={24} />, count: '3,120 Ads', link: '/search', colorClass: 'bg-orange-500/10 text-orange-500' },
    { title: 'Business Directory', icon: <Store size={24} />, count: '780 Profiles', link: '/business', colorClass: 'bg-yellow-500/10 text-yellow-600' },
    { title: 'Local News', icon: <Newspaper size={24} />, count: '120 Articles', link: '/news', colorClass: 'bg-red-500/10 text-red-500' },
  ];

  const featuredListings = [
    { title: 'iPhone 15 Pro Max 256GB', price: 'Rs. 325,000', location: 'Colombo', category: 'Marketplace', link: '/search' },
    { title: 'Dell XPS 15 9520 Core i9', price: 'Rs. 420,000', location: 'Kandy', category: 'Marketplace', link: '/search' },
    { title: 'Canon EOS R6 Mark II Body', price: 'Rs. 680,000', location: 'Gampaha', category: 'Marketplace', link: '/search' },
  ];

  const popularBusinesses = [
    { name: 'Kandy Auto Spares Ltd', category: 'Auto Repairs', rating: 4.8, location: 'Kandy', isVerified: true, link: '/business' },
    { name: 'Apex Digital Marketing Agency', category: 'Software & IT', rating: 4.9, location: 'Colombo 03', isVerified: true, link: '/business' },
  ];

  const latestJobs = [
    { title: 'Senior React Developer', company: 'LankaHub Solutions', location: 'Colombo 04', salary: 'Rs. 350,000 - 450,000', type: 'Full-time', link: '/jobs' },
    { title: 'Content Writer (Sinhala)', company: 'Hoyamu Newsroom', location: 'Remote', salary: 'Rs. 80,000 - 120,000', type: 'Part-time', link: '/jobs' },
  ];

  const latestVehicles = [
    { title: 'Toyota Prius S-Grade 2018', price: 'Rs. 9,450,000', location: 'Colombo', mileage: '56,000 km', transmission: 'Automatic', type: 'Hybrid', link: '/vehicles' },
    { title: 'Honda Vezel Z-Package 2016', price: 'Rs. 7,850,000', location: 'Gampaha', mileage: '82,000 km', transmission: 'Automatic', type: 'Hybrid', link: '/vehicles' },
  ];

  const latestProperties = [
    { title: 'Modern 3 BR House in Kottawa', price: 'Rs. 28,500,000', location: 'Colombo', beds: '3 Beds', size: '1,800 sqft', type: 'House', link: '/properties' },
    { title: '15 Perch Commercial Land', price: 'Rs. 1,800,000 / perch', location: 'Gampaha', beds: 'N/A', size: '15 Perch', type: 'Land', link: '/properties' },
  ];

  const latestNews = [
    { title: 'Market Trends: Sri Lankan Property Demand Spikes in 2026', date: 'July 10, 2026', category: 'Real Estate', summary: 'A comprehensive study of property rates in major urban areas showing a 12% rise in demand.', link: '/news' },
    { title: 'Tech Startups: Colombo Hub Sees Rapid Growth in Seed Fundings', date: 'July 05, 2026', category: 'Business', summary: 'Local incubators report higher success rates as domestic digital directories connect traders.', link: '/news' },
  ];

  return (
    <div className="space-y-16 pb-16 bg-[#FAFAFA] text-[#222222]">
      {/* Hero Header */}
      <Hero />

      {/* Search Input Bar wrapper */}
      <div className="px-4 -mt-10 relative z-20">
        <SearchBar />
      </div>

      {/* Popular Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <h2 className="text-xl font-bold tracking-tight">Popular Categories</h2>
            <p className="text-xs text-[#6B7280]">Browse classified ads by category channels</p>
          </div>
          <Link href="/categories" className="text-xs font-bold text-[#E25704] hover:underline flex items-center gap-1">
            All Categories
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <CategoryCard
              key={idx}
              title={cat.title}
              icon={cat.icon}
              count={cat.count}
              link={cat.link}
              colorClass={cat.colorClass}
            />
          ))}
        </div>
      </section>

      {/* Grid containing Listings and Businesses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Listings */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-end">
            <h2 className="text-lg font-bold tracking-tight">Featured Classifieds</h2>
            <Link href="/search" className="text-xs font-bold text-[#E25704] hover:underline">
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featuredListings.map((list, idx) => (
              <ListingCard
                key={idx}
                title={list.title}
                price={list.price}
                location={list.location}
                category={list.category}
                link={list.link}
              />
            ))}
          </div>
        </div>

        {/* Verified Directories */}
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <h2 className="text-lg font-bold tracking-tight">Verified Partners</h2>
            <Link href="/business" className="text-xs font-bold text-[#E25704] hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {popularBusinesses.map((biz, idx) => (
              <BusinessCard
                key={idx}
                name={biz.name}
                category={biz.category}
                rating={biz.rating}
                location={biz.location}
                isVerified={biz.isVerified}
                link={biz.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Grid containing Vehicles and Properties */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Vehicles */}
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <h2 className="text-lg font-bold tracking-tight">Featured Vehicles</h2>
            <Link href="/vehicles" className="text-xs font-bold text-[#E25704] hover:underline">
              Explore vehicles
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {latestVehicles.map((veh, idx) => (
              <VehicleCard
                key={idx}
                title={veh.title}
                price={veh.price}
                location={veh.location}
                mileage={veh.mileage}
                transmission={veh.transmission}
                type={veh.type}
                link={veh.link}
              />
            ))}
          </div>
        </div>

        {/* Properties */}
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <h2 className="text-lg font-bold tracking-tight">Prime Properties</h2>
            <Link href="/properties" className="text-xs font-bold text-[#E25704] hover:underline">
              Explore properties
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {latestProperties.map((prop, idx) => (
              <PropertyCard
                key={idx}
                title={prop.title}
                price={prop.price}
                location={prop.location}
                beds={prop.beds}
                size={prop.size}
                type={prop.type}
                link={prop.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Board & News portal section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Jobs vacancies list */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-end">
            <h2 className="text-lg font-bold tracking-tight">Latest Job Openings</h2>
            <Link href="/jobs" className="text-xs font-bold text-[#E25704] hover:underline">
              Browse Jobs
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {latestJobs.map((job, idx) => (
              <JobCard
                key={idx}
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary}
                type={job.type}
                link={job.link}
              />
            ))}
          </div>
        </div>

        {/* Local News list */}
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <h2 className="text-lg font-bold tracking-tight">Market Intelligence</h2>
            <Link href="/news" className="text-xs font-bold text-[#E25704] hover:underline">
              All News
            </Link>
          </div>
          <div className="space-y-4">
            {latestNews.map((news, idx) => (
              <NewsCard
                key={idx}
                title={news.title}
                date={news.date}
                category={news.category}
                summary={news.summary}
                link={news.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Platform verification CTA banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#222222] text-[#FAFAFA] p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-lg border border-transparent">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E25704]/20 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="space-y-4 max-w-xl relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#E25704] flex items-center gap-1">
              <ShieldCheck size={14} />
              HOYAMU Verified business directory
            </span>
            <h2 className="text-2xl md:text-3xl font-black leading-tight">
              Boost your local brand visibility today!
            </h2>
            <p className="text-xs text-[#A3A3A3] leading-relaxed">
              Register your workspace profile card, display services checklists, and get verified badge validation status to increase user queries conversion metrics.
            </p>
          </div>

          <div className="flex gap-3 relative z-10 flex-shrink-0">
            <Link href="/business">
              <button className="h-11 px-6 bg-[#E25704] hover:bg-[#C94D03] text-white text-xs font-semibold rounded-xl transition-all">
                List Your Business
              </button>
            </Link>
            <Link href="/contact">
              <button className="h-11 px-6 border border-[#404040] hover:border-[#A3A3A3] text-white text-xs font-semibold rounded-xl transition-all">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
