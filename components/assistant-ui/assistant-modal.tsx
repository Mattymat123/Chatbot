import { AssistantModalPrimitive } from "@assistant-ui/react";
import { Thread } from "@/components/assistant-ui/thread";
import { BotIcon } from "lucide-react";

export const AssistantModal = () => {
  return (
    <AssistantModalPrimitive.Root>
      <AssistantModalPrimitive.Anchor className="fixed right-4 bottom-4 size-11">
        <AssistantModalPrimitive.Trigger asChild>
          <button className="size-full rounded-full bg-primary shadow hover:scale-120 active:scale-90 colo">
          </button>
        </AssistantModalPrimitive.Trigger>
      </AssistantModalPrimitive.Anchor>

      <AssistantModalPrimitive.Content
        sideOffset={16}
        className="h-[500px] w-[400px] overflow-hidden rounded-xl border bg-popover shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out"
      >
        <Thread />
      </AssistantModalPrimitive.Content>
    </AssistantModalPrimitive.Root>
  );
};