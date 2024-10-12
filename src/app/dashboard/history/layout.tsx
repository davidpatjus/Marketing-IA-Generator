'use client';

import OutputSection from '@/components/Content/OutputSection';
import { SelectedAIResponseContext } from '@/app/(context)/SelectedAIResponse';
import React, { useContext, useEffect, useState } from 'react';

interface HistoryLayoutProps {
    children: React.ReactNode;
}

const HistoryLayout: React.FC<HistoryLayoutProps> = ({ children }) => {
    const { selectedAIResponse } = useContext(SelectedAIResponseContext);
    const [isClient, setIsClient] = useState(false);

    // Se asegura de que el componente esté montado en el cliente
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Retorna null si no está en el cliente
    }

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
