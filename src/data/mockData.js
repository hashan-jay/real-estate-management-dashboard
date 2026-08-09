export const kpis = [
  { id: 'properties', label: 'Total Properties', value: '1,650', change: 11.5, tone: 'up' },
  { id: 'listings', label: 'Active Listings', value: '846', change: 8.2, tone: 'up' },
  { id: 'deals', label: 'Deals Closed', value: '121', change: 4.1, tone: 'up' },
  { id: 'revenue', label: 'Revenue', value: '$3.58M', change: 14.8, tone: 'up' },
]

export const featuredProperty = {
  badge: 'New Listing',
  title: 'Modern Villa in Green Valley',
  price: '$2,430,000',
  address: '123 Green Valley, Austin TX',
  status: 'For Sale',
  beds: 4,
  baths: 3,
  sqft: '3,500',
  image:
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
}

export const weeklySales = [
  { day: 'Mon', sales: 42 },
  { day: 'Tue', sales: 58 },
  { day: 'Wed', sales: 86 },
  { day: 'Thu', sales: 64 },
  { day: 'Fri', sales: 72 },
  { day: 'Sat', sales: 48 },
  { day: 'Sun', sales: 35 },
]

export const marketSegments = [
  { name: 'Downtown', value: 34, color: '#0E6B56' },
  { name: 'Suburbs', value: 28, color: '#2A6F97' },
  { name: 'Waterfront', value: 22, color: '#A66B3A' },
  { name: 'Others', value: 16, color: '#7A8A82' },
]

export const agentActivity = [
  {
    id: 1,
    agent: 'David Smith',
    avatar: 'DS',
    activity: 'Property Tour',
    property: 'Lakeside Villa',
    client: 'Emma Wilson',
    date: 'Aug 8, 2026',
    status: 'Completed',
  },
  {
    id: 2,
    agent: 'Sarah Johnson',
    avatar: 'SJ',
    activity: 'Contract Review',
    property: 'Oak Street Apt',
    client: 'James Chen',
    date: 'Aug 8, 2026',
    status: 'Pending',
  },
  {
    id: 3,
    agent: 'Michael Brown',
    avatar: 'MB',
    activity: 'Open House',
    property: 'Harbor Loft',
    client: 'Priya Nair',
    date: 'Aug 7, 2026',
    status: 'Completed',
  },
  {
    id: 4,
    agent: 'Ava Martinez',
    avatar: 'AM',
    activity: 'Offer Negotiation',
    property: 'Cedar Ridge',
    client: 'Noah Patel',
    date: 'Aug 7, 2026',
    status: 'Pending',
  },
  {
    id: 5,
    agent: 'Liam Foster',
    avatar: 'LF',
    activity: 'Listing Photos',
    property: 'Summit House',
    client: 'Olivia Reed',
    date: 'Aug 6, 2026',
    status: 'Completed',
  },
]

export const properties = [
  {
    id: 'P-1042',
    name: 'Green Valley Villa',
    location: 'Austin, TX',
    type: 'Villa',
    price: '$2,430,000',
    status: 'For Sale',
    beds: 4,
    baths: 3,
    sqft: '3,500',
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'P-1043',
    name: 'Harbor Waterfront Loft',
    location: 'Seattle, WA',
    type: 'Loft',
    price: '$1,180,000',
    status: 'For Sale',
    beds: 2,
    baths: 2,
    sqft: '1,650',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'P-1044',
    name: 'Cedar Ridge Estate',
    location: 'Denver, CO',
    type: 'House',
    price: '$875,000',
    status: 'Pending',
    beds: 5,
    baths: 4,
    sqft: '4,100',
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'P-1045',
    name: 'Oak Street Apartments',
    location: 'Chicago, IL',
    type: 'Apartment',
    price: '$3,200/mo',
    status: 'For Rent',
    beds: 3,
    baths: 2,
    sqft: '1,420',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'P-1046',
    name: 'Summit Glass House',
    location: 'Portland, OR',
    type: 'House',
    price: '$1,650,000',
    status: 'For Sale',
    beds: 4,
    baths: 3,
    sqft: '2,980',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'P-1047',
    name: 'Riverfront Studio',
    location: 'Nashville, TN',
    type: 'Studio',
    price: '$1,850/mo',
    status: 'For Rent',
    beds: 1,
    baths: 1,
    sqft: '720',
    image:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80',
  },
]

export const listings = [
  { id: 'L-2201', title: 'Downtown Penthouse', agent: 'Sarah Johnson', views: 1842, inquiries: 36, status: 'Live' },
  { id: 'L-2202', title: 'Suburban Family Home', agent: 'David Smith', views: 967, inquiries: 21, status: 'Live' },
  { id: 'L-2203', title: 'Lakeview Condo', agent: 'Ava Martinez', views: 1240, inquiries: 29, status: 'Review' },
  { id: 'L-2204', title: 'Historic Brownstone', agent: 'Michael Brown', views: 654, inquiries: 12, status: 'Draft' },
  { id: 'L-2205', title: 'Tech District Townhome', agent: 'Liam Foster', views: 2104, inquiries: 48, status: 'Live' },
]

export const deals = [
  { id: 'D-901', property: 'Harbor Loft', buyer: 'James Chen', value: '$1.18M', stage: 'Closing', probability: 92 },
  { id: 'D-902', property: 'Cedar Ridge', buyer: 'Noah Patel', value: '$875K', stage: 'Negotiation', probability: 68 },
  { id: 'D-903', property: 'Summit House', buyer: 'Olivia Reed', value: '$1.65M', stage: 'Offer', probability: 54 },
  { id: 'D-904', property: 'Green Valley Villa', buyer: 'Emma Wilson', value: '$2.43M', stage: 'Touring', probability: 35 },
  { id: 'D-905', property: 'Oak Street Apt', buyer: 'Priya Nair', value: '$3.2K/mo', stage: 'Lease Draft', probability: 81 },
]

export const messages = [
  { id: 1, from: 'Emma Wilson', preview: 'Can we schedule a second tour this weekend?', time: '12m', unread: true },
  { id: 2, from: 'James Chen', preview: 'Inspection report looks good. Ready to proceed.', time: '1h', unread: true },
  { id: 3, from: 'Priya Nair', preview: 'Please send the updated lease terms.', time: '3h', unread: false },
  { id: 4, from: 'Noah Patel', preview: 'Counter-offer attached for review.', time: 'Yesterday', unread: false },
]

export const documents = [
  { id: 1, name: 'Purchase Agreement — Harbor Loft', type: 'PDF', size: '2.4 MB', updated: 'Aug 8, 2026' },
  { id: 2, name: 'Lease Draft — Oak Street', type: 'DOCX', size: '840 KB', updated: 'Aug 7, 2026' },
  { id: 3, name: 'Inspection Report — Cedar Ridge', type: 'PDF', size: '5.1 MB', updated: 'Aug 6, 2026' },
  { id: 4, name: 'Marketing Brief Q3', type: 'PDF', size: '1.2 MB', updated: 'Aug 5, 2026' },
]

export const calendarEvents = [
  { id: 1, title: 'Open House — Summit Glass House', time: '10:00 AM', day: 'Mon' },
  { id: 2, title: 'Client Call — Emma Wilson', time: '1:30 PM', day: 'Mon' },
  { id: 3, title: 'Contract Signing — Harbor Loft', time: '11:00 AM', day: 'Wed' },
  { id: 4, title: 'Photo Shoot — Riverfront Studio', time: '3:00 PM', day: 'Thu' },
  { id: 5, title: 'Team Pipeline Review', time: '9:30 AM', day: 'Fri' },
]

export const marketingCampaigns = [
  { id: 1, name: 'Austin Luxury Spring Push', channel: 'Social + Email', spend: '$12.4K', leads: 186, status: 'Active' },
  { id: 2, name: 'Waterfront Weekend Ads', channel: 'Paid Search', spend: '$8.1K', leads: 94, status: 'Active' },
  { id: 3, name: 'Rental Occupancy Drive', channel: 'Email', spend: '$2.6K', leads: 61, status: 'Paused' },
]
