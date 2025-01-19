"use client"
import React, { createContext, useState, useContext } from 'react';

const TriggerContext = createContext();

export const TriggerProvider = ({ children }) => {
  const [trigger, setTrigger] = useState("");

  return (
    <TriggerContext.Provider value={{ trigger, setTrigger }}>
      {children}
    </TriggerContext.Provider>
  );
};

export const useTrigger = () => {
  const context = useContext(TriggerContext);
  if (!context) {
    throw new Error('useTrigger must be used within a TriggerProvider');
  }
  return context;
};
