"use client";

// state
import { useEffect } from "react";

export const useIntro = () => {
  const storage = window.localStorage;
  const currentTimestamp = Date.now();
  const timestamp = storage.getItem("tommybyrne-timestamp") || "1000";

  const timeLimit = 5 * 60 * 1000; // 5 mins
  const hasTimePassed = currentTimestamp - parseInt(timestamp) > timeLimit;

  useEffect(() => {
    hasTimePassed
      ? storage.setItem("tommybyrne-timestamp", currentTimestamp.toString())
      : storage.setItem("tommybyrne-timestamp", timestamp.toString());
  }, [currentTimestamp, hasTimePassed, storage, timestamp]);

  return hasTimePassed;
};
