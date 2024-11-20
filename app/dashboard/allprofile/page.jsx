import { ArrowLeft, Search, Bell } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import Link from 'next/link';

const examData = Array(10).fill({
  name: 'Samri Ahmed Agboola',
  username: '@Mendorz',
  score: '85/100',
  badges: ['Scholar', 'Scholar']
});

export default function page() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <div className="max-w-[1200px] mx-auto p-6">
        <div className="bg-white rounded-xl shadow-sm">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h1 className="text-2xl font-bold">Overview Summary</h1>
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10" />
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full relative">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Back Navigation */}
          <div className="p-6">
            <button className="flex items-center text-gray-600 hover:text-gray-800">
             <Link href={"/dashboard"}>
             <ArrowLeft className="w-4 h-4 mr-2" />
             </Link>
              <span className="font-medium">Your Exam Summary</span>
            </button>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-5 px-6 py-3 text-sm text-gray-500">
            <div>Profile</div>
            <div>Average score</div>
            <div>Ranks</div>
            <div>Badges</div>
            <div>Email address</div>
          </div>

          {/* Table Content */}
          <div className="px-6 pb-6">
            {examData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-5 items-center py-4 border-t first:border-t-0"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8" />
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.username}</div>
                  </div>
                </div>
                <div>
                  <span className="bg-[#E8FFF1] text-[#1B874B] px-2 py-1 rounded">
                    {item.score}
                  </span>
                </div>
                <div>
                  <span className="bg-[#EBF6FF] text-[#0086E6] px-3 py-1 rounded">
                    Scholar
                  </span>
                </div>
                <div>
                  <span className="bg-[#FFF8E7] text-[#B98900] px-3 py-1 rounded">
                    Scholar
                  </span>
                </div>
                <div className="text-gray-500">Email address</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}