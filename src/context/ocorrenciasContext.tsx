import React, { createContext, ReactNode, useState } from 'react';

interface OcorrenciasContextData {
  ocorrenciasData: any;
  setOcorrenciasData: (value: any) => void;
}

interface OcorrenciasContextProviderProps {
  children: ReactNode;
}

export const OcorrenciasContext = createContext({} as OcorrenciasContextData);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function OcorrenciasContextProvider({
  children,
}: OcorrenciasContextProviderProps) {

  const [ocorrenciasData, setOcorrenciasData] = useState<any>([]);


  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <OcorrenciasContext.Provider
      value={{
        ocorrenciasData, 
        setOcorrenciasData
      
      }}
    >
      {children}
    </OcorrenciasContext.Provider>
  );
}
