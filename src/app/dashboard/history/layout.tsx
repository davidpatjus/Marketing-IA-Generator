import { ReactNode } from 'react';
import { useUser } from '@clerk/nextjs';
import Loading from '@/components/ui/Loading';


const { user } = useUser();

interface HistoryLayoutProps {
  children: ReactNode;
}

useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const response = await fetch(`/api/aiOutputs?createdBy=${user.primaryEmailAddress?.emailAddress}`);
          const data = await response.json();
          console.log(data);
          setAiOutputs(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [user]);

if (loading) return <Loading />;

export default function HistoryLayout({ children }: HistoryLayoutProps) {
  return (
      <main>
        {children}
      </main>
  );
}
