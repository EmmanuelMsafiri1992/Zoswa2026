import { Outlet } from 'react-router-dom'
import DashboardNav from './DashboardNav'
import Sidebar from './Sidebar'
import TrialBanner from '../subscription/TrialBanner'
import { useAuthStore } from '../../store/authStore'

export default function DashboardLayout() {
  const { user, trialDaysLeft } = useAuthStore()
  const showTrialBanner = !user?.isSubscribed && trialDaysLeft > 0 && trialDaysLeft <= 7

  return (
    <div className="min-h-screen bg-dark-900 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        {showTrialBanner && <TrialBanner daysLeft={trialDaysLeft} />}
        <DashboardNav />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
