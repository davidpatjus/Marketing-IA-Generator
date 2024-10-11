'use client';
import React, { useState } from 'react'
import SearchSection from '../../components/Dashboard/SearchSection';
import TemplateSection from '@/components/Dashboard/TemplateSection';



function Dashboard() {

  const [userSearchInput, setUserSearchInput] = useState<string>('');


  return (
    <div>
      {/* Search Section */}
      <SearchSection onSearchInput={(value:string) => setUserSearchInput(value)} />

      {/* Template List Section */}
      <TemplateSection userSearchInput={userSearchInput} />
    </div>
    );
}

export default Dashboard