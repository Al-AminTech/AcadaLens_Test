import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <div className="flex flex-col bg-[#f0f8f9] justify-start md:justify-center pb-5 pt-7 items-center">
      <Accordion type="single" collapsible className="w-full md:w-[65rem]">
        <AccordionItem value="item-1" className="shadow-md m-4 md:m-0 bg-white rounded-lg overflow-hidden">
          <AccordionTrigger className="bg-[#CCF5FF] px-6 py-4 text-lg font-semibold hover:no-underline group">
            What is Academia?
          
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-gray-600">
            Academia is an innovative educational platform that combines traditional learning with AI-powered tools to provide personalized learning experiences for students.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="w-full mt-4 md:w-[65rem]">
        <AccordionItem value="item-1" className="shadow-md m-4 md:m-0 bg-white rounded-lg overflow-hidden">
          <AccordionTrigger className="bg-[#CCF5FF] px-6 py-4 text-lg font-semibold hover:no-underline group">
            How does Academia's AI assessment work?
        
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-gray-600">
            Our AI assessment system analyzes student responses, provides instant feedback, and adapts to individual learning patterns to create a personalized learning journey.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="w-full mt-4 md:w-[65rem]">
        <AccordionItem value="item-1" className="shadow-md m-4 md:m-0 bg-white rounded-lg overflow-hidden">
          <AccordionTrigger className="bg-[#CCF5FF] px-6 py-4 text-lg font-semibold hover:no-underline group">
            What subjects does Academia cover?
          
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-gray-600">
            Academia covers a wide range of subjects including Mathematics, Sciences, Languages, and Humanities, with specialized content for different educational levels.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
