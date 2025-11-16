import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { RainbowButton } from "@/components/ui/rainbow-button";

export function HighlighterDemo() {
  return (
    <div className="text-center w-full px-4 md:px-8 lg:px-0 space-y-8">
      <p className="flex flex-col gap-6 md:gap-5 lg:gap-8 leading-relaxed text-base md:text-xl lg:text-2xl text-center">
        <span className="block w-full md:w-auto font-medium">
          আমাদের{" "}
          <Highlighter strokeWidth={2} action="underline" color="#87CEFA" padding={4}>
            কোম্পানিতে আপনাকে স্বাগতম
          </Highlighter>
        </span>

        <span className="block w-full md:w-auto text-white font-semibold">
          <Highlighter padding={10} action="highlight" color="#b84fce">
            পেশাদারিত্ব, বিশ্বাস এবং মানের প্রতিশ্রুতিতে
          </Highlighter>{" "}
          <span className="text-black font-medium">আমরা সবসময় আপনার পাশে</span>
        </span>
      </p>
       <div className="flex gap-4 items-center justify-center">
 <Button className="text-xl bg-white shadow-md text-md font-bold">বিস্তারিত</Button>
 <Button className="text-xl bg-white shadow-md text-md font-bold">প্রজেক্ট</Button>

       </div>
     
    </div>
  );
}


