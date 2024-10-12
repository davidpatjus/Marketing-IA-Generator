'use client'
import OutputSection from '@/components/Content/OutputSection';
import { SelectedAIResponseContext } from '@/app/(context)/SelectedAIResponse';
import React, { useContext } from 'react';

interface HistoryLayoutProps {
    children: React.ReactNode;
}


const HistoryLayout: React.FC<HistoryLayoutProps> = ({ children }) => {
    const { selectedAIResponse } = useContext(SelectedAIResponseContext);
    return (
            <main>
                {children}
                <div className='p-3 m-3 bg-white rounded-lg shadow-lg'>
                <OutputSection aiOutput={selectedAIResponse || ''} />                
                </div>
            </main>
    );
};

export default HistoryLayout;