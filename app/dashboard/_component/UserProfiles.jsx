'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const users = [
  { id: 1, name: 'Sanni Ahmed Agboola', username: '@Mendorz', avatar: '/placeholder.svg?height=40&width=40', averageScore: '85/100', rank: 'Scholar', badge: 'Scholar', email: 'sanni@example.com' },
  { id: 2, name: 'Jane Doe', username: '@janedoe', avatar: '/placeholder.svg?height=40&width=40', averageScore: '90/100', rank: 'Expert', badge: 'Expert', email: 'jane@example.com' },
  { id: 3, name: 'John Smith', username: '@johnsmith', avatar: '/placeholder.svg?height=40&width=40', averageScore: '80/100', rank: 'Novice', badge: 'Novice', email: 'john@example.com' },
  { id: 4, name: 'Alice Johnson', username: '@alicej', avatar: '/placeholder.svg?height=40&width=40', averageScore: '95/100', rank: 'Master', badge: 'Master', email: 'alice@example.com' },
  { id: 5, name: 'Bob Wilson', username: '@bobw', avatar: '/placeholder.svg?height=40&width=40', averageScore: '88/100', rank: 'Advanced', badge: 'Advanced', email: 'bob@example.com' },
  { id: 5, name: 'Bob Wilson', username: '@bobw', avatar: '/placeholder.svg?height=40&width=40', averageScore: '88/100', rank: 'Advanced', badge: 'Advanced', email: 'bob@example.com' }, 
]

const USERS_PER_PAGE = 5

export default function UserProfiles() {
  const [showAll, setShowAll] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const toggleView = () => {
    setShowAll(!showAll)
    setCurrentPage(1)
  }

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE)
  const paginatedUsers = users.slice((currentPage - 1) * USERS_PER_PAGE, currentPage * USERS_PER_PAGE)

  return (
    <div className="p-6 space-y-8">
      <div className="flex gap-2 items-center">
        <h2 className="text-3xl font-bold">User Profiles</h2>
        <Link href={""} onClick={toggleView} size="lg">
          {showAll ? 'Hide Details' : 'View All'}
        </Link>
      </div>

      {!showAll ? (
        <Table className=" shadow-md rounded-md w-[40rem] mb-5">
          <TableHeader className="rounded-md shaow-md">
            <TableRow className="shadow-sm">
              <TableHead className="w-[300px]">Profile</TableHead>
              <TableHead>Average Score</TableHead>
              <TableHead>Rank</TableHead>
              <TableHead>Badge</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.id} className="group">
                <TableCell className="font-medium">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.username}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">{user.averageScore}</TableCell>
                <TableCell className="text-center">{user.rank}</TableCell>
                <TableCell className="text-center">{user.badge}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={toggleView} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Profiles
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Profile</TableHead>
                <TableHead>Average Score</TableHead>
                <TableHead>Rank</TableHead>
                <TableHead>Badge</TableHead>
                <TableHead>Email Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedUsers.map((user) => (
                <TableRow key={user.id} className="group">
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.username}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">{user.averageScore}</TableCell>
                  <TableCell className="text-center">{user.rank}</TableCell>
                  <TableCell className="text-center">{user.badge}</TableCell>
                  <TableCell className="text-center">{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink 
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  )
}