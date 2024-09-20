import { ScaleLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-indigo-900 opacity-1 flex justify-center items-center z-50">
            <ScaleLoader color="white" speedMultiplier={2} radius={5} width={6} height={55} />    
    </div>
  );
}