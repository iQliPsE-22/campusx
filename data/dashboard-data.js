// This file would typically fetch data from an API
// For now, we'll use mock data

export const getMockDashboardData = () => {
  const mockActiveListings = [
    {
      id: "textbook-cs101",
      title: "CS101 Textbook",
      price: 45.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "Marketplace",
      subcategory: "Books",
      listed: "2 days ago",
      views: 34,
      saves: 5,
      status: "active",
    },
    {
      id: "apartment-1",
      title: "1BR Apartment Near Campus",
      price: 850,
      image: "/placeholder.svg?height=200&width=200",
      category: "Rentals",
      subcategory: "Properties",
      listed: "5 days ago",
      views: 89,
      saves: 12,
      status: "active",
    },
    {
      id: "camera-1",
      title: "DSLR Camera Weekend Rental",
      price: 35,
      image: "/placeholder.svg?height=200&width=200",
      category: "Rentals",
      subcategory: "Electronics",
      listed: "1 week ago",
      views: 27,
      saves: 3,
      status: "active",
    },
    {
      id: "project-web",
      title: "Web Development Project",
      price: 1200,
      image: "/placeholder.svg?height=200&width=200",
      category: "Projects",
      subcategory: "Development",
      listed: "3 days ago",
      views: 42,
      saves: 8,
      status: "pending",
    },
  ]

  const mockSoldItems = [
    {
      id: "calculator-ti84",
      title: "TI-84 Calculator",
      price: 60.0,
      image: "/placeholder.svg?height=200&width=200",
      category: "Marketplace",
      subcategory: "Electronics",
      soldDate: "3 days ago",
      buyer: "Michael Chen",
      status: "completed",
    },
    {
      id: "desk-lamp",
      title: "Adjustable Desk Lamp",
      price: 15.0,
      image: "/placeholder.svg?height=200&width=200",
      category: "Marketplace",
      subcategory: "Home",
      soldDate: "1 week ago",
      buyer: "Sarah Williams",
      status: "completed",
    },
    {
      id: "bike-rental",
      title: "Mountain Bike Rental",
      price: 25.0,
      image: "/placeholder.svg?height=200&width=200",
      category: "Rentals",
      subcategory: "Vehicles",
      soldDate: "2 days ago",
      buyer: "Alex Johnson",
      status: "in-progress",
    },
  ]

  const mockMessages = [
    {
      id: "msg-1",
      from: "Alex Johnson",
      subject: "CS101 Textbook",
      preview: "Hi, is this textbook still available? I was wondering if...",
      time: "2 hours ago",
      unread: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "msg-2",
      from: "Emily Davis",
      subject: "1BR Apartment Near Campus",
      preview: "Hello, I'm interested in your apartment listing. Is it still...",
      time: "1 day ago",
      unread: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "msg-3",
      from: "Ryan Thompson",
      subject: "DSLR Camera Weekend Rental",
      preview: "Hey there! I'd like to rent your camera for this coming weekend...",
      time: "2 days ago",
      unread: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const mockAnalytics = {
    revenue: {
      total: 145.99,
      change: 12.5,
      data: [12, 18, 15, 22, 30, 28, 25],
    },
    views: {
      total: 192,
      change: -5.2,
      data: [45, 52, 38, 24, 33, 26, 21],
    },
    conversion: {
      rate: 3.2,
      change: 0.8,
      data: [2.4, 2.8, 3.0, 2.9, 3.1, 3.2, 3.2],
    },
    categories: [
      { name: "Marketplace", value: 60 },
      { name: "Rentals", value: 30 },
      { name: "Projects", value: 10 },
    ],
  }

  return {
    activeListings: mockActiveListings,
    soldItems: mockSoldItems,
    messages: mockMessages,
    analytics: mockAnalytics,
  }
}
