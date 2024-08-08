// utils
import { toast as sonner } from "sonner";
import { format } from "date-fns";

export const toast = (message: string) => {
  return sonner(message, {
    description: format(new Date(), "PPPP 'at' p"),
  });
};
