"use client";

// state
import { useState } from "react";

// base
import { Plus, X } from "lucide-react";

// components
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// utils
import { motion, AnimatePresence } from "framer-motion";

let newIndex = 0;
const add = (arr: number[]) => {
  newIndex++;
  return [...arr, newIndex];
};

const remove = (arr: number[], item: number) => {
  const newArr = [...arr];
  newArr.splice(
    newArr.findIndex((i) => i === item),
    1
  );
  return newArr;
};

export const NotificationAnimation = () => {
  // state
  const [notifications, setNotifications] = useState([0]);

  return (
    <div className="mb-4 not-prose rounded-md border bg-gray-100 p-2 dark:bg-gray-900">
      <div className="relative flex h-64 items-end justify-between overflow-hidden rounded-md bg-background p-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setNotifications(add(notifications))}
        >
          <Plus className="size-5" />
        </Button>
        <motion.ul
          layout
          className="bottom-0 right-0 top-0 flex flex-col gap-2"
        >
          <AnimatePresence initial={false} mode="sync">
            {notifications.map((n) => (
              <motion.li
                key={n}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              >
                <Card className="w-48">
                  <CardHeader>
                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          setNotifications(remove(notifications, n))
                        }
                      >
                        <X className="size-4" />
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </div>
  );
};
