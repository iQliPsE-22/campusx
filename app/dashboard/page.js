"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Filter,
  MoreHorizontal,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";

export default function SellerDashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeListings, setActiveListings] = useState([]);
  const [soldItems, setSoldItems] = useState([]);
  const [messages, setMessages] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      // Mock data
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
      ];

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
      ];

      const mockMessages = [
        {
          id: "msg-1",
          from: "Alex Johnson",
          subject: "CS101 Textbook",
          preview:
            "Hi, is this textbook still available? I was wondering if...",
          time: "2 hours ago",
          unread: true,
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "msg-2",
          from: "Emily Davis",
          subject: "1BR Apartment Near Campus",
          preview:
            "Hello, I'm interested in your apartment listing. Is it still...",
          time: "1 day ago",
          unread: false,
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "msg-3",
          from: "Ryan Thompson",
          subject: "DSLR Camera Weekend Rental",
          preview:
            "Hey there! I'd like to rent your camera for this coming weekend...",
          time: "2 days ago",
          unread: false,
          avatar: "/placeholder.svg?height=40&width=40",
        },
      ];

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
      };

      setActiveListings(mockActiveListings);
      setSoldItems(mockSoldItems);
      setMessages(mockMessages);
      setAnalytics(mockAnalytics);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredListings = activeListings.filter((listing) => {
    const matchesCategory =
      filterCategory === "all" || listing.category === filterCategory;
    const matchesSearch = listing.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Seller Dashboard</h1>
              <p className="text-gray-400">
                Manage your listings, sales, and messages
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Link href="/seller-dashboard/new-listing">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  New Listing
                </Button>
              </Link>
              <Link href="/seller-dashboard/settings">
                <Button
                  variant="outline"
                  className="border-gray-700 hover:border-gray-600"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard
              title="Active Listings"
              value={activeListings.length}
              icon={<Package className="h-5 w-5 text-blue-500" />}
              description="Across all categories"
              link="/seller-dashboard/listings"
            />

            <StatsCard
              title="Items Sold"
              value={soldItems.length}
              icon={<ShoppingBag className="h-5 w-5 text-green-500" />}
              description="In the last 30 days"
              link="/seller-dashboard/sales"
            />

            <StatsCard
              title="Total Earnings"
              value={`₹${analytics.revenue.total.toFixed(2)}`}
              icon={<DollarSign className="h-5 w-5 text-amber-500" />}
              description={`${analytics.revenue.change > 0 ? "+" : ""}${
                analytics.revenue.change
              }% from last month`}
              trend={analytics.revenue.change > 0 ? "up" : "down"}
              link="/seller-dashboard/earnings"
            />

            <StatsCard
              title="Unread Messages"
              value={messages.filter((msg) => msg.unread).length}
              icon={<MessageSquare className="h-5 w-5 text-indigo-500" />}
              description="Respond to stay active"
              link="/seller-dashboard/messages"
            />
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="listings" className="mb-8">
            <TabsList className="mb-6 bg-gray-900">
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

            {/* Listings Tab */}
            <TabsContent value="listings">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <CardTitle>
                      Active Listings ({filteredListings.length})
                    </CardTitle>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input
                          placeholder="Search listings..."
                          className="pl-9 bg-gray-800 border-gray-700"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Select
                          value={filterCategory}
                          onValueChange={setFilterCategory}
                        >
                          <SelectTrigger className="bg-gray-800 border-gray-700 w-[180px]">
                            <SelectValue placeholder="Filter by category" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="Marketplace">
                              Marketplace
                            </SelectItem>
                            <SelectItem value="Rentals">Rentals</SelectItem>
                            <SelectItem value="Projects">Projects</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-gray-700"
                        >
                          <Filter className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {filteredListings.length > 0 ? (
                    <div className="divide-y divide-gray-800">
                      {filteredListings.map((listing) => (
                        <div
                          key={listing.id}
                          className="py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                        >
                          <div className="relative w-full sm:w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
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
                              <div className="text-blue-400 font-bold">
                                ₹{listing.price}
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
                                <Badge
                                  variant="outline"
                                  className={`ml-2 ${
                                    listing.status === "active"
                                      ? "border-green-500 text-green-500"
                                      : "border-amber-500 text-amber-500"
                                  }`}
                                >
                                  {listing.status === "active"
                                    ? "Active"
                                    : "Pending"}
                                </Badge>
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
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="border-gray-700 hover:bg-gray-800"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="bg-gray-800 border-gray-700">
                                <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Listing
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit Listing
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="bg-gray-700" />
                                <DropdownMenuItem className="text-red-500 hover:bg-gray-700 cursor-pointer">
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete Listing
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-12 text-center">
                      <div className="mx-auto w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                        <Package className="h-6 w-6 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">
                        No listings found
                      </h3>
                      <p className="text-gray-400 mb-6">
                        {searchQuery
                          ? `No results for "${searchQuery}"`
                          : "You don't have any active listings in this category."}
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Plus className="h-4 w-4 mr-2" />
                        Create New Listing
                      </Button>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="border-t border-gray-800 flex justify-between items-center py-4">
                  <div className="text-sm text-gray-400">
                    Showing {filteredListings.length} of {activeListings.length}{" "}
                    listings
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-700"
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-700"
                    >
                      Next
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Sold Items Tab */}
            <TabsContent value="sold">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Sold Items ({soldItems.length})</CardTitle>
                  <CardDescription>
                    Track your sales and rental transactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="divide-y divide-gray-800">
                    {soldItems.map((item) => (
                      <div
                        key={item.id}
                        className="py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                      >
                        <div className="relative w-full sm:w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                            <h4 className="font-medium text-gray-200">
                              {item.title}
                            </h4>
                            <div className="text-green-500 font-bold">
                              ₹{item.price}
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:justify-between">
                            <div className="flex items-center text-sm text-gray-400 mb-2 sm:mb-0">
                              {item.category === "Marketplace" && (
                                <ShoppingBag className="h-4 w-4 mr-1" />
                              )}
                              {item.category === "Rentals" && (
                                <Home className="h-4 w-4 mr-1" />
                              )}
                              {item.category === "Projects" && (
                                <Briefcase className="h-4 w-4 mr-1" />
                              )}
                              <span>{item.category}</span>
                              <span className="mx-2">•</span>
                              <span>Sold {item.soldDate}</span>
                            </div>

                            <div className="flex items-center text-sm">
                              <Badge
                                variant="outline"
                                className={
                                  item.status === "completed"
                                    ? "border-green-500 text-green-500"
                                    : "border-amber-500 text-amber-500"
                                }
                              >
                                {item.status === "completed"
                                  ? "Completed"
                                  : "In Progress"}
                              </Badge>
                              <span className="mx-2 text-gray-400">•</span>
                              <span className="text-gray-400">
                                Buyer: {item.buyer}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2 w-full sm:w-auto">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-700 hover:bg-gray-800"
                          >
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Contact
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-700 hover:bg-gray-800"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Messages Tab */}
            <TabsContent value="messages">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Messages</CardTitle>
                  <CardDescription>
                    Stay in touch with your buyers and renters
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="divide-y divide-gray-800">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`py-4 flex items-start gap-4 ${
                          message.unread ? "bg-blue-900/10 -mx-6 px-6" : ""
                        }`}
                      >
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={message.avatar || "/placeholder.svg"}
                            alt={message.from}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-grow min-w-0">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-medium text-gray-200 flex items-center">
                              {message.from}
                              {message.unread && (
                                <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                              )}
                            </h4>
                            <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                              {message.time}
                            </span>
                          </div>
                          <div className="text-sm font-medium text-gray-300 mb-1">
                            {message.subject}
                          </div>
                          <p className="text-sm text-gray-400 truncate">
                            {message.preview}
                          </p>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-700 hover:bg-gray-800 flex-shrink-0"
                        >
                          Reply
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-800">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    View All Messages
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      Revenue
                      <Badge
                        variant="outline"
                        className={
                          analytics.revenue.change > 0
                            ? "border-green-500 text-green-500"
                            : "border-red-500 text-red-500"
                        }
                      >
                        {analytics.revenue.change > 0 ? "+" : ""}
                        {analytics.revenue.change}%
                      </Badge>
                    </CardTitle>
                    <CardDescription>Last 7 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-4">
                      ₹{analytics.revenue.total.toFixed(2)}
                    </div>
                    <div className="h-[200px] w-full">
                      {/* Chart would go here - using a placeholder */}
                      <div className="flex h-full items-end gap-2">
                        {analytics.revenue.data.map((value, i) => (
                          <div
                            key={i}
                            className="bg-blue-500 rounded-t w-full"
                            style={{
                              height: `${
                                (value / Math.max(...analytics.revenue.data)) *
                                100
                              }%`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      Listing Views
                      <Badge
                        variant="outline"
                        className={
                          analytics.views.change > 0
                            ? "border-green-500 text-green-500"
                            : "border-red-500 text-red-500"
                        }
                      >
                        {analytics.views.change > 0 ? "+" : ""}
                        {analytics.views.change}%
                      </Badge>
                    </CardTitle>
                    <CardDescription>Last 7 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-4">
                      {analytics.views.total}
                    </div>
                    <div className="h-[200px] w-full">
                      {/* Chart would go here - using a placeholder */}
                      <div className="flex h-full items-end gap-2">
                        {analytics.views.data.map((value, i) => (
                          <div
                            key={i}
                            className="bg-purple-500 rounded-t w-full"
                            style={{
                              height: `${
                                (value / Math.max(...analytics.views.data)) *
                                100
                              }%`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle>Conversion Rate</CardTitle>
                    <CardDescription>
                      Percentage of views that result in sales
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-2">
                      {analytics.conversion.rate}%
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        analytics.conversion.change > 0
                          ? "border-green-500 text-green-500"
                          : "border-red-500 text-red-500"
                      }
                    >
                      {analytics.conversion.change > 0 ? "+" : ""}
                      {analytics.conversion.change}% from last week
                    </Badge>
                    <div className="mt-6 space-y-4">
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>This Week</span>
                          <span>{analytics.conversion.rate}%</span>
                        </div>
                        <Progress
                          value={analytics.conversion.rate * 10}
                          className="h-2 bg-gray-800"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Last Week</span>
                          <span>
                            {(
                              analytics.conversion.rate -
                              analytics.conversion.change
                            ).toFixed(1)}
                            %
                          </span>
                        </div>
                        <Progress
                          value={
                            (analytics.conversion.rate -
                              analytics.conversion.change) *
                            10
                          }
                          className="h-2 bg-gray-800"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle>Sales by Category</CardTitle>
                    <CardDescription>
                      Distribution of your sales across categories
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {analytics.categories.map((category) => (
                        <div key={category.name}>
                          <div className="flex justify-between mb-1 text-sm">
                            <span>{category.name}</span>
                            <span>{category.value}%</span>
                          </div>
                          <Progress
                            value={category.value}
                            className="h-2 bg-gray-800"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Recent Activity */}
          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest updates on your listings and sales
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative pl-6 border-l border-gray-800 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-green-500"></div>
                  <div className="mb-1 flex items-center justify-between">
                    <h4 className="font-medium">New Sale: TI-84 Calculator</h4>
                    <span className="text-xs text-gray-400">2 hours ago</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Michael Chen purchased your TI-84 Calculator for ₹60.00.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="mb-1 flex items-center justify-between">
                    <h4 className="font-medium">New Message</h4>
                    <span className="text-xs text-gray-400">5 hours ago</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Alex Johnson sent you a message about CS101 Textbook.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-purple-500"></div>
                  <div className="mb-1 flex items-center justify-between">
                    <h4 className="font-medium">Listing View Milestone</h4>
                    <span className="text-xs text-gray-400">1 day ago</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Your 1BR Apartment listing has reached 50+ views!
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-gray-800">
              <Button variant="outline" className="w-full border-gray-700">
                View All Activity
              </Button>
            </CardFooter>
          </Card>

          {/* Tips & Recommendations */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Tips & Recommendations</CardTitle>
              <CardDescription>
                Improve your selling performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Complete Your Profile</h4>
                    <p className="text-sm text-gray-400">
                      Sellers with complete profiles get 30% more inquiries. Add
                      a profile picture and bio to increase your credibility.
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-400 mt-2"
                    >
                      Update Profile
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="flex-shrink-0">
                    <Camera className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Improve Your Photos</h4>
                    <p className="text-sm text-gray-400">
                      Listings with high-quality photos sell 2x faster. Consider
                      updating the images for your CS101 Textbook listing.
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-green-400 mt-2"
                    >
                      Learn Photography Tips
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

// Helper Components
function StatsCard({ title, value, icon, description, trend, link }) {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-gray-400">{title}</h3>
          {icon}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-sm text-gray-400 mt-1 flex items-center">
              {description}
              {trend && (
                <span
                  className={`ml-1 flex items-center ${
                    trend === "up" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {trend === "up" ? (
                    <ArrowUpRight className="h-3 w-3 mr-0.5" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 mr-0.5" />
                  )}
                </span>
              )}
            </p>
          </div>
          <Link href={link || "#"}>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <Skeleton className="h-8 w-64 bg-gray-800 mb-2" />
            <Skeleton className="h-4 w-32 bg-gray-800" />
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <Skeleton className="h-10 w-32 bg-gray-800" />
            <Skeleton className="h-10 w-32 bg-gray-800" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Skeleton className="h-5 w-24 bg-gray-800" />
                  <Skeleton className="h-5 w-5 rounded-full bg-gray-800" />
                </div>
                <Skeleton className="h-8 w-16 bg-gray-800 mb-2" />
                <Skeleton className="h-4 w-32 bg-gray-800" />
              </CardContent>
            </Card>
          ))}
        </div>

        <Skeleton className="h-10 w-full max-w-md bg-gray-800 mb-8 rounded-lg" />

        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardHeader>
            <Skeleton className="h-6 w-48 bg-gray-800 mb-2" />
            <Skeleton className="h-4 w-64 bg-gray-800" />
          </CardHeader>
          <CardContent className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <Skeleton className="h-16 w-16 bg-gray-800 rounded-lg flex-shrink-0" />
                <div className="flex-grow space-y-2">
                  <Skeleton className="h-5 w-full bg-gray-800" />
                  <Skeleton className="h-4 w-3/4 bg-gray-800" />
                  <Skeleton className="h-4 w-1/2 bg-gray-800" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Camera(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}
