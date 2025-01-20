"use client"
import React, { createContext, useState, useContext } from 'react';

const TriggerContext = createContext();

export const TriggerProvider= ({children}) => {
  const [trigger, setTrigger] = useState([]);

  return (
    <TriggerContext.Provider value={{ trigger, setTrigger }}>
      {children}
      </TriggerContext.Provider>
  );
};

export const useTrigger = () => {
  return useContext(TriggerContext);
};

//in nextjs every component is a server side rendered component, that why we use 'use client to makre it run in client side tooo !!!!