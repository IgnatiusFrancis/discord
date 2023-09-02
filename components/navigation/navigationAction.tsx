"use client";

import { Plus } from "lucide-react";
import ActionTooltip from "@/components/actionTooltip";
import { useModal } from "@/hooks/use-modal-store";

const NavigationAction = () => {
  const { onOpen } = useModal();
  return (
    <div>
      <div>
        <ActionTooltip side="right" align="center" label="Add a server">
          <button
            onClick={() => onOpen("createServer")}
            className="group flex items-center"
          >
            <div
              className="flex mx-3 h-[48] w-[48] rounded-[24px]
           group-hover:rounded-[16px] transition-all overflow-hidden dark:bg-neutral-700
            group-hover:bg-emerald-500"
            >
              <Plus
                className="group-hover:text-white transition text-emerald-500"
                size={25}
              />
            </div>
          </button>
        </ActionTooltip>
      </div>
    </div>
  );
};

export default NavigationAction;
