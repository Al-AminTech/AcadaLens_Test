export default function TrendingTopics() {
    const trends = [
      {
        title: "Unilorin releases first batch of admission list",
        comments: "248 comments"
      },
      {
        title: "Slack and Community",
        comments: "24 comments"
      },
      {
        title: "Unilorin releases first batch of admission list",
        comments: "248 comments"
      },
      {
        title: "Unilorin releases first batch of admission list",
        comments: "248 comments"
      }
    ];
  
    return (
      <div className="bg-[#F2FDFF] rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">TRENDS FOR YOU</h2>
        <div className="space-y-4">
          {trends.map((trend, index) => (
            <div key={index} className="space-y-1">
              <h3 className="font-medium hover:text-blue-600 cursor-pointer">
                {trend.title}
              </h3>
              <p className="text-sm text-gray-500">{trend.comments}</p>
            </div>
          ))}
        </div>
        <button className="w-full rounded-md border border-blue-500 bg-white mt-4 text-blue-600 font-medium">
          View All
        </button>
      </div>
    );
  }