import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="mt-8 px-8 py-3 text-lg font-medium bg-white/20 backdrop-blur-sm border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          Explore Ocean
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white/90 dark:bg-black/90 backdrop-blur-lg border border-blue-200 dark:border-blue-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Welcome to Ocean AI
          </DialogTitle>
          <DialogDescription className="text-gray-700 dark:text-gray-300">
            Dive into the vast ocean of AI-powered assistance. Ready to explore?
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2 py-4">
          <div className="grid flex-1 gap-2">
            <Label
              htmlFor="link"
              className="text-sm font-medium text-gray-600 dark:text-gray-400"
            >
              Quick Start Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ocean-ai.example.com/start"
              readOnly
              className="bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-between">
          <Button
            type="button"
            variant="outline"
            className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
            onClick={() =>
              navigator.clipboard?.writeText(
                "https://ocean-ai.example.com/start"
              )
            } 
          >
            Copy Link
          </Button>
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="bg-blue-500 text-white hover:bg-blue-600"
            >
              Get Started
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
