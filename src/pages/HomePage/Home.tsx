import { HighlighterDemo } from "@/app/component/TextHighlighter";

import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
const HomePage = () =>{
    return(
        <div  className=" size-full relative flex  items-center justify-center overflow-hidden  shadow md-p-44 pt-32 pb-10 mt-12">
             <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
            <HighlighterDemo/>
        </div>
    )
} 

export default HomePage;


// style={{ background: "linear-gradient(0deg, rgb(165,180,252), rgb(79,70,229))" }}