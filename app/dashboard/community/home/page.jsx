import { Search, Bell } from 'lucide-react';
import Image from 'next/image';
import PostList from './PostList';
import TrendingTopics from './TrendingTopics';
import TopCommunities from './TopCommunities';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1">
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search for community"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  1
                </span>
              </button>
              <button className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                    src=""
                    alt="Profile"
                    width={32}
                    height={32}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PostList />
          </div>
          <div className="space-y-6">
            <TopCommunities  />
            <TrendingTopics
         />
          </div>
        </div>
      </main>
    </div>
  );
}