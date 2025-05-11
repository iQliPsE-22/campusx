import { Building, Car, Laptop } from "lucide-react"

export const rentalCategories = [
  {
    id: "properties",
    name: "Properties",
    icon: <Building className="h-6 w-6" />,
    image: "/properties.jpg",
    address: "/rentals/properties",
    description: "Find your perfect student housing",
    featured: [
      {
        id: "prop1",
        title: "Modern Studio Apartment",
        location: "0.5 miles from University",
        price: 12000,
        image: "/properties.jpg",
        rating: 4.8,
        reviews: 24,
      },
      {
        id: "prop2",
        title: "Shared 3BR House with Backyard",
        location: "1.2 miles from University",
        price: 8000,
        image: "/properties.jpg",
        rating: 4.5,
        reviews: 18,
      },
    ],
  },
  {
    id: "vehicles",
    name: "Vehicles",
    icon: <Car className="h-6 w-6" />,
    image: "/vehicle.jpg",
    address: "/rentals/vehicles",
    description: "Rent vehicles for your campus commute",
    featured: [
      {
        id: "v1",
        title: "Honda Activa 6G",
        capacity: "2 Persons",
        price: 300,
        image: "/vehicle.jpg",
        rating: 4.7,
        reviews: 32,
      },
      {
        id: "v2",
        title: "Royal Enfield Classic 350",
        capacity: "2 Persons",
        price: 800,
        image: "/vehicle.jpg",
        rating: 4.9,
        reviews: 45,
      },
    ],
  },
  {
    id: "electronics",
    name: "Electronics",
    icon: <Laptop className="h-6 w-6" />,
    image: "/electronics.jpg",
    address: "/rentals/electronics",
    description: "Rent premium electronics without breaking the bank",
    featured: [
      {
        id: "e1",
        title: "Canon EOS 5D Mark IV DSLR Camera",
        deposit: "₹15,000",
        price: 1500,
        image: "/electronic.jpg",
        rating: 4.9,
        reviews: 42,
      },
      {
        id: "e2",
        title: 'MacBook Pro 16" M1 Pro',
        deposit: "₹20,000",
        price: 1200,
        image: "/electronic.jpg",
        rating: 4.8,
        reviews: 35,
      },
    ],
  },
]

export const rentalTestimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Engineering Student",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Finding a good apartment near campus was so easy with CampusX. The verification process made me feel secure about my rental.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Medical Student",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "I rented a scooter for the semester and saved so much time commuting. The process was smooth and affordable!",
    rating: 4,
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Computer Science Major",
    image: "/placeholder.svg?height=80&width=80",
    quote: "Rented a high-end laptop for my final project. Saved me thousands and the condition was like new!",
    rating: 5,
  },
]
