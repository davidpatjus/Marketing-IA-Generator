'use strict';
import OutputSection from '@/components/Content/OutputSection';
import { SelectedAIResponseContext } from '@/app/(context)/SelectedAIResponse';
import React, { useState } from 'react';

interface HistoryLayoutProps {
    children: React.ReactNode;
}


const HistoryLayout: React.FC<HistoryLayoutProps> = ({ children }) => {
    const [ selectedAIResponse, setSelectedAIResponse ] = useState<string>('');
    return (
        <SelectedAIResponseContext.Provider value={{selectedAIResponse, setSelectedAIResponse}}>
            <main>
                {children}
                <div className='p-3 m-3 bg-white rounded-lg shadow-lg'>
                <OutputSection aiOutput={selectedAIResponse || ''} />                
                </div>
            </main>
        </SelectedAIResponseContext.Provider>
    );
};

export default HistoryLayout;