export default function TopCommunities() {
    const communities = [
      { name: "Unilorin", members: "50K+" },
      { name: "Unilorin", members: "30K+" },
      { name: "Unilorin", members: "25K+" },
      { name: "Unilorin", members: "20K+" },
    ];
  
    return (
      <div className="bg-[#F2FDFF] rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-bold mb-4 text-[#005C73]">TOP COMMUNITIES</h2>
        <div className="space-y-4">
          {communities.map((community, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-medium">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-medium">{community.name}</h3>
                  <p className="text-sm text-gray-500">{community.members} members</p>
                </div>
              </div>
              <button className="px-4 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100">
                Join
              </button>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 border bg-white rounded-md border-blue-500 text-blue-600 font-medium">
          View All
        </button>
      </div>
    );
  }