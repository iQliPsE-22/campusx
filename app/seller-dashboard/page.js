"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Package,
  ShoppingBag,
  Home,
  Briefcase,
  Plus,
  Edit,
  Trash2,
  Eye,
  DollarSign,
  MessageSquare,
  BarChart2,
  Settings,
} from "lucide-react";

export default function Page() {
  const [activeListings, setActiveListings] = useState([]);
  const [soldItems, setSoldItems] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mockActiveListings = [
      {
        id: "textbook-cs101",
        title: "CS101 Textbook",
        price: 45.99,
        image: "/placeholder.svg?height=200&width=200",
        category: "Marketplace",
        listed: "2 days ago",
        views: 34,
        saves: 5,
      },
      {
        id: "apartment-1",
        title: "1BR Apartment Near Campus",
        price: 850,
        image: "/placeholder.svg?height=200&width=200",
        category: "Rentals",
        listed: "5 days ago",
        views: 89,
        saves: 12,
      },
      {
        id: "camera-1",
        title: "DSLR Camera Weekend Rental",
        price: 35,
        image: "/placeholder.svg?height=200&width=200",
        category: "Rentals",
        listed: "1 week ago",
        views: 27,
        saves: 3,
      },
    ];

    const mockSoldItems = [
      {
        id: "calculator-ti84",
        title: "TI-84 Calculator",
        price: 60.0,
        image: "/placeholder.svg?height=200&width=200",
        category: "Marketplace",
        soldDate: "3 days ago",
        buyer: "Michael Chen",
      },
      {
        id: "desk-lamp",
        title: "Adjustable Desk Lamp",
        price: 15.0,
        image: "/placeholder.svg?height=200&width=200",
        category: "Marketplace",
        soldDate: "1 week ago",
        buyer: "Sarah Williams",
      },
    ];

    const mockMessages = [
      {
        id: "msg-1",
        from: "Alex Johnson",
        subject: "CS101 Textbook",
        preview: "Hi, is this textbook still available? I was wondering if...",
        time: "2 hours ago",
        unread: true,
      },
      {
        id: "msg-2",
        from: "Emily Davis",
        subject: "1BR Apartment Near Campus",
        preview:
          "Hello, I'm interested in your apartment listing. Is it still...",
        time: "1 day ago",
        unread: false,
      },
      {
        id: "msg-3",
        from: "Ryan Thompson",
        subject: "DSLR Camera Weekend Rental",
        preview:
          "Hey there! I'd like to rent your camera for this coming weekend...",
        time: "2 days ago",
        unread: false,
      },
    ];

    setTimeout(() => {
      setActiveListings(mockActiveListings);
      setSoldItems(mockSoldItems);
      setMessages(mockMessages);
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-64  rounded mb-4"></div>
          <div className="h-4 w-32  rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Seller Dashboard</h1>
          <p className="text-gray-400">
            Manage your listings, sales, and messages
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3 text-sm">
          <Link
            href="/seller-dashboard/new-listing"
            className="px-5 py-2 bg-white text-black rounded-lg font-medium hover:bg-[#fafafa] transition-colors flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Listing
          </Link>
          <Link
            href="/seller-dashboard/settings"
            className="px-5 py-2 bg-[#0a0d12] border border-gray-700 text-gray-300 rounded-lg font-medium hover: transition-colors flex items-center"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#0a0d12] p-6 rounded-lg border border-gray-700 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-400">Active Listings</h3>
            <Package className="h-5 w-5 text-rose-500" />
          </div>
          <p className="text-3xl font-bold">{activeListings.length}</p>
          <p className="text-sm text-gray-400 mt-1">Across all categories</p>
        </div>

        <div className="bg-[#0a0d12] p-6 rounded-lg border border-gray-700 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-400">Items Sold</h3>
            <ShoppingBag className="h-5 w-5 text-emerald-500" />
          </div>
          <p className="text-3xl font-bold">{soldItems.length}</p>
          <p className="text-sm text-gray-400 mt-1">In the last 30 days</p>
        </div>

        <div className="bg-[#0a0d12] p-6 rounded-lg border border-gray-700 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-400">Total Earnings</h3>
            <DollarSign className="h-5 w-5 text-amber-500" />
          </div>
          <p className="text-3xl font-bold">
            ${soldItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </p>
          <p className="text-sm text-gray-400 mt-1">In the last 30 days</p>
        </div>

        <div className="bg-[#0a0d12] p-6 rounded-lg border border-gray-700 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-400">Unread Messages</h3>
            <MessageSquare className="h-5 w-5 text-indigo-500" />
          </div>
          <p className="text-3xl font-bold">
            {messages.filter((msg) => msg.unread).length}
          </p>
          <p className="text-sm text-gray-400 mt-1">Respond to stay active</p>
        </div>
      </div>

      <Tabs defaultValue="listings" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="listings" className="flex items-center">
            <Package className="h-4 w-4 mr-2" />
            My Listings
          </TabsTrigger>
          <TabsTrigger value="sold" className="flex items-center">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Sold Items
          </TabsTrigger>
          <TabsTrigger value="messages" className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-2" />
            Messages
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center">
            <BarChart2 className="h-4 w-4 mr-2" />
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="listings">
          <div className="bg-[#0a0d12] rounded-lg border border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="font-semibold text-gray-200">
                Active Listings ({activeListings.length})
              </h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm  hover:bg-gray-600 rounded">
                  Filter
                </button>
                <button className="px-3 py-1 text-sm  hover:bg-gray-600 rounded">
                  Sort
                </button>
              </div>
            </div>

            <div className="divide-y divide-gray-700">
              {activeListings.map((listing) => (
                <div
                  key={listing.id}
                  className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  <div className="relative w-full sm:w-16 h-16  rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={listing.image || "/placeholder.svg"}
                      alt={listing.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                      <h4 className="font-medium text-gray-200">
                        {listing.title}
                      </h4>
                      <div className="text-rose-500 font-bold">
                        ${listing.price}
                        {listing.category === "Rentals" && (
                          <span className="text-xs text-gray-400 font-normal">
                            /mo
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <div className="flex items-center text-sm text-gray-400 mb-2 sm:mb-0">
                        {listing.category === "Marketplace" && (
                          <ShoppingBag className="h-4 w-4 mr-1" />
                        )}
                        {listing.category === "Rentals" && (
                          <Home className="h-4 w-4 mr-1" />
                        )}
                        {listing.category === "Projects" && (
                          <Briefcase className="h-4 w-4 mr-1" />
                        )}
                        <span>{listing.category}</span>
                        <span className="mx-2">•</span>
                        <span>Listed {listing.listed}</span>
                      </div>

                      <div className="flex items-center text-sm text-gray-400">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>{listing.views} views</span>
                        <span className="mx-2">•</span>
                        <span>{listing.saves} saves</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-initial px-3 py-1.5 text-sm  hover:bg-gray-600 rounded flex items-center justify-center">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </button>
                    <button className="flex-1 sm:flex-initial px-3 py-1.5 text-sm  hover:bg-gray-600 rounded flex items-center justify-center text-red-500">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Other TabsContent sections should also be updated similarly */}
      </Tabs>
    </div>
  );
}
