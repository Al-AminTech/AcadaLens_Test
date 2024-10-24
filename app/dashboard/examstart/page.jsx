import React from "react";

function page() {
  return (
    <div>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">
          Hi Agboola, read instructions properly before starting your
          examination
        </h1>
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="font-semibold mb-2">Single Mode Examination Score</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Use of English 25 questions</li>
            <li>Mathematics 25 questions</li>
            <li>Economics 25 questions</li>
            <li>Financial Accounting 25 questions</li>
          </ul>
          <p className="mt-4">Exam takes 25 Mins Per Subject</p>
        </div>
        <div className="flex justify-end space-x-4">
          <Button variant="outline" className="px-8">
            Cancel
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700 px-8">
            Start exam
          </Button>
        </div>
      </main>
    </div>
  );
}

export default page;
