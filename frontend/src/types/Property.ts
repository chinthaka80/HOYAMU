export interface Property {
  listing_id: number;
  property_type: 'house' | 'land' | 'apartment' | 'commercial';
  beds?: number;
  baths?: number;
  size: number;
  size_unit: 'sqft' | 'perch' | 'acres';
  location_lat?: number;
  location_lng?: number;
}
